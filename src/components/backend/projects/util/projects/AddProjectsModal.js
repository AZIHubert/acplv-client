import React, { useCallback, useState, useContext, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_PROJECTS_QUERY } from '../../../../../graphql/querys/index';

import { AuthContext } from '../../../../../context/AuthContext';
import {withRouter} from 'react-router-dom';

import CustomModal from '../../../util/CustomModal';
import Form from '../../../util/Form';
import CustomTextField from '../../../util/CustomTextField';
import WaitModal from '../../../util/WaitModal';

import { useDropzone } from 'react-dropzone';

import {
    Typography,
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    Select,
    FormLabel,
    Button
} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(4)
    },
    formControlLabel: {
        '& .MuiTypography-root': {
            fontSize: '1.2rem'
        },
        '& .MuiCheckbox-colorPrimary': {
            color: theme.palette.tertiaryColor
        },
        '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: theme.palette.tertiaryColor
        }
    },
    typeSelector: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        fontSize: '1.5rem',
        padding: '1px 10px'
    },
    formLabelContainer: {
        paddingBottom: theme.spacing(1)
    },
    formLabel: {
        fontSize: '1.5rem',
    },
    selectTypeContainer: {
        paddingBottom: theme.spacing(3)
    },
    droperContainer: {
        paddingBottom: theme.spacing(3)
    },
    droper: {
        flexGrow: 2,
        padding: theme.spacing(2),
        height: 250,
        border: `1px dotted ${theme.palette.secondaryColor}`,
        borderRadius: 10,
        marginRight: theme.spacing(1)
    },
    droperText: {
        fontSize: '1.2rem'
    },
    thumbnailPreviewContainer: {
        width: '40%',
        border: `2px solid ${theme.palette.tertiaryColor}`,
        borderRadius: 10,
    },
    removeButton: {
        backgroundColor: theme.palette.tertiaryColor,
        border: `1px solid ${theme.palette.tertiaryColor}`,
        borderRadius: 5,
        padding: theme.spacing(1, 2),
        '&:hover span': {
            color: theme.palette.tertiaryColor
        }
    },
    undoButton: {
        marginLeft: theme.spacing(1)
    }
}));

export default withRouter(({history, open, handleClose, project, errors, setErrors}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const {logout} = useContext(AuthContext);

    const [projectId, setProjectId] = useState(project ? project._id :  '');
    const {loading, data} = useQuery(FETCH_TYPES_QUERY);
    const [newProject, setNewProject] = useState({
        title: project ? project.title : '',
        display: project ? project.display : true,
        typeId: (project && project.type) ? project.type._id : ''
    });
    const [projectSaved, setProjectSaved] = useState(false);
    const [save, setSave] = useState(false);

    const [hasThumbnail, setHasThumbnail] = useState(project && !!project.thumbnail);
    const [thumbnailChange, setThumbnailChange] = useState(false);
    const [thumbnail, setThumbnail] = useState((project && !!project.thumbnail) ? project.thumbnail : {})
    const [droperText, setDroperText] = useState('Drag \'n\' drop the thumbnail here, or click to select file');
    const [previewThumbnail, setPreviewThumbnail] = useState(
        (project && !!project.thumbnail) ? project.thumbnail.url : ''
    );

    const [projectResult, setProjectResult] = useState({});
    
    const onDrop = useCallback(([file]) => {
        if(file.type === 'image/jpeg' || file.type === 'image/png'){
            if(hasThumbnail){
                setThumbnailChange(true);
            }
            setThumbnail(file);
            setPreviewThumbnail(URL.createObjectURL(file));
        } else {
            setDroperText('Your file is not an image')
        }
    }, [hasThumbnail]);

    const handleChange = e => {
        e.persist();
        setNewProject(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const [createProject] = useMutation(CREATE_PROJECT_MUTATION, {
        variables: {projectInput: newProject},
        update(proxy, result){
            if(!!Object.keys(thumbnail).length){
                setProjectId(result.data.createProject._id);
                setProjectResult(result.data.createProject);
                setProjectSaved(true);
            } else {
                const data = proxy.readQuery({
                    query: FETCH_PROJECTS_QUERY
                });
                const newProject = {
                    ...result.data.createProject,
                    index: 0
                };
                data.getProjects.map(project => ({
                    project,
                    index: project.index++
                }));
                proxy.writeQuery({
                    query: FETCH_PROJECTS_QUERY,
                    data: {getProjects: [
                        newProject,
                        ...data.getProjects
                    ]}
                });
                setNewProject({
                    title:  '',
                    display:  true,
                    typeId:  ''
                });
                setSave(false);
                setProjectId('');
                handleClose();
            }
        },
        onError(err){
            console.log(err);
            setSave(false);
            const error = err.graphQLErrors[0];
            if(error.extensions.code === "BAD_USER_INPUT"){
                setErrors(error.extensions.exception.errors);
            }
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\'' ||
               error.message === 'Invalid/Expired token'){
                    logout();
                    history.push('/login');
            }
        }
    });
    const [editProject] = useMutation(EDIT_PROJECT_MUTATION, {
        variables: {projectId, projectInput: newProject},
        update(){
            let d = false;
            let a = false;
            if(hasThumbnail && thumbnailChange){
                d = true;
                deleteImage();
            }
            if((!hasThumbnail && !!Object.keys(thumbnail).length) || (!!Object.keys(thumbnail).length && thumbnailChange)){
                a = true;
                uploadImageOnExistedProject()
            }
            if(!d && !a){
                handleClose();
                setSave(false);
            }
        },
        onError(err){
            console.log(err);
            setSave(false);
            const error = err.graphQLErrors[0];
            if(error.extensions.code === "BAD_USER_INPUT"){
                setErrors(error.extensions.exception.errors);
            }
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\'' ||
               error.message === 'Invalid/Expired token'){
                    logout();
                    history.push('/login');
            }
        }
    });
    const [uploadImage] = useMutation(UPLOAD_THUMBNAIL, {
        variables: {imageFile: thumbnail, projectId},
        update(proxy, result){
            const projectWithThumbnail = {
                ...projectResult,
                thumbnail: result.data.uploadImage,
                index: 0
            };
            const data = proxy.readQuery({
                query: FETCH_PROJECTS_QUERY
            });
            data.getProjects.map(project => ({
                project,
                index: project.index++
            }));
            proxy.writeQuery({
                query: FETCH_PROJECTS_QUERY,
                data: {getProjects: [
                    projectWithThumbnail,
                    ...data.getProjects
                ]}
            });
            setNewProject({
                title:  '',
                display:  true,
                typeId:  ''
            });
            setHasThumbnail(true);
            setSave(false);
            setProjectResult({});
            handleClose();
        },
        onError(err){
            console.log(err);
            setSave(false);
            setNewProject({
                title:  '',
                display:  true,
                typeId:  ''
            });
            setThumbnail({});
            setPreviewThumbnail('');
            setProjectResult({});
            handleClose();
        }
    });
    const [uploadImageOnExistedProject] = useMutation(UPLOAD_THUMBNAIL, {
        variables: {imageFile: thumbnail, projectId},
        update(proxy, result){
            const thumbnail = result.data.uploadImage;
            const data = proxy.readQuery({
                query: FETCH_PROJECTS_QUERY
            });
            const newProjects = data.getProjects.map(project => {
                if(project._id === projectId){
                    return {
                        ...project,
                        thumbnail
                    }
                } else return project;
            });
            proxy.writeQuery({
                query: FETCH_PROJECTS_QUERY,
                data: {getProjects: [
                    ...newProjects
                ]}
            });
            setHasThumbnail(true);
            setSave(false);
            handleClose();
            setThumbnailChange(false);
        },
        onError(err){
            console.log(err);
            setNewProject({
                title:  '',
                display:  true,
                typeId:  ''
            });
            setSave(false);
            setThumbnail({});
            setPreviewThumbnail('');
            setProjectResult({});
            handleClose();
            setThumbnailChange(false);
        }
    });

    const [deleteImage] = useMutation(DELETE_IMAGE_MUTATION, {
        variables: {imageId: (project && project.thumbnail) ? project.thumbnail._id : ''},
        update(proxy, result){
            if(!Object.keys(thumbnail).length){
                setSave(false);
                setThumbnail({});
                setHasThumbnail(false);
                setPreviewThumbnail('');
                setThumbnailChange(false);
                handleClose();
            }
        },
        onError(err){
            const error = err.graphQLErrors[0];
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\''){
                    logout();
                    history.push('/login');
            } else {
                handleClose();
                console.log(err);
            }
        }
    });

    const handleSubmit = e => {
        e.preventDefault();
        if(projectId) editProject();
        else createProject();
        setSave(true);
    }
    
    useEffect(() => {
        if(projectSaved){
            uploadImage();
            setProjectId('');
            setProjectSaved(false);
        }
    }, [projectSaved, uploadImage]);

    const handleChangeDisplay = e => {
        e.persist();
        setNewProject(prevState => ({
            ...prevState,
            display: e.target.checked
        }));
    }
    const {getRootProps, getInputProps} = useDropzone({onDrop});
    return (
        !loading && <CustomModal open={open} handleClose={handleClose}>
            <Box className={classes.titleContainer}>
                <Typography variant="h2">
                    {projectId ? 'Edit' : 'New'} Project
                </Typography>
            </Box>
            <Form handleSubmit={handleSubmit}>
                <CustomTextField
                    paddingBottom
                    fullWidth
                    label="Title"
                    name="title"
                    autoFocus
                    value={newProject.title}
                    handleChange={handleChange}
                    error={!!errors.title}
                    helperText={errors.title}
                />
                <FormControlLabel
                    value="start"
                    control={
                        <Checkbox
                            color='primary' disableRipple
                            value={newProject.display}
                            checked={newProject.display}
                            onChange={handleChangeDisplay}
                        />
                    }
                    label="display"
                    labelPlacement="start"
                    className={classes.formControlLabel}
                />
                {!!data.getTypes.length &&
                    <Box display="flex" flexDirection="column" className={classes.selectTypeContainer}>
                        <Box className={classes.formLabelContainer}>
                            <FormLabel className={classes.formLabel}>
                                Type
                            </FormLabel>
                        </Box>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                native
                                style={{input: {
                                    fontSize: 'inherit'
                                }}}
                                name="typeId"
                                className={classes.typeSelector}
                                defaultValue={newProject.typeId}
                                onChange={handleChange}
                            >
                                <option aria-label="None" value='' />
                                {data.getTypes.map(type => (
                                    <option value={type._id} key={type._id}>{type.title}</option>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                }
                <Box className={classes.droperContainer}
                    display="flex" alignItems="stretch"
                >
                    <div {...getRootProps()} className={classes.droper}>
                        <input {...getInputProps()} />
                        {
                            <Typography variant="body1" className={classes.droperText}>
                                {droperText}
                            </Typography>
                        }
                    </div>
                    <Box className={classes.thumbnailPreviewContainer}
                        style={{
                            backgroundImage: !!previewThumbnail ? `url('${previewThumbnail}')` : '',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}
                    >
                    </Box>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                    {previewThumbnail && (
                        <Button className={classes.removeButton} onClick={() => {
                            setPreviewThumbnail('');
                            setThumbnailChange(true);
                            setThumbnail({});
                        }}>
                            Remove thumbnail
                        </Button>
                    )}
                    {thumbnailChange && (
                        <Button className={`${classes.removeButton} ${classes.undoButton}`} onClick={() => {
                            setPreviewThumbnail(project.thumbnail.url);
                            setThumbnailChange(false);
                            setThumbnail(project.thumbnail);
                        }}>
                            undo thumbnail
                        </Button>
                    )}
                </Box>
            </Form>
            <WaitModal open={save} />
        </CustomModal>
    );
});

const FETCH_TYPES_QUERY = gql` 
    {
        getTypes {
            _id
            title
        }
    }
`;

const CREATE_PROJECT_MUTATION = gql`
    mutation createProject($projectInput: ProjectInput!){
        createProject(projectInput: $projectInput){
            _id
            display
            title
            type {
                _id
            },
            thumbnail {
                _id
                url
            }
        }
    }
`;

const EDIT_PROJECT_MUTATION = gql`
    mutation editProject(
        $projectId: ID!
        $projectInput: ProjectInput!
    ) {
        editProject(projectId: $projectId, projectInput: $projectInput){
            _id
            display
            title
            type {
                _id
            },
            thumbnail {
                _id
                url
            }
        }
    }
`;

const UPLOAD_THUMBNAIL = gql`
    mutation uploadImage(
        $imageFile: Upload!
        $projectId: ID!
    ) {
        uploadImage(imageFile: $imageFile, projectId: $projectId){
            _id
            url
        }
    }
`;

const DELETE_IMAGE_MUTATION = gql`
    mutation deleteImage(
        $imageId: ID!
    ) {
        deleteImage(imageId: $imageId)
    }
`;