import React, { useCallback, useState } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CustomModal from '../../../util/CustomModal';
import Form from '../../../util/Form';
import CustomTextField from '../../../util/CustomTextField';


import {useDropzone} from 'react-dropzone';

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
        border: `1px dotted ${theme.palette.tertiaryColor}`,
        borderRadius: 5,
        padding: theme.spacing(1, 2)
    }
}));

export default ({open, handleClose, project}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const {loading, data} = useQuery(FETCH_TYPES_QUERY);
    const projectId = project ? project._id :  '';
    const [droperText, setDroperText] = useState('Drag \'n\' drop the thumbnail here, or click to select file');
    const [thumbnailChange, setThumbnailChange] = useState(false)
    const [thumbnail, setThumbnail] = useState({});
    const [previewThumbnail, setPreviewThumbnail] = useState(
        project ? project.thumbnailUrl : ''
    );
    const [newProject, setNewProject] = useState({
        title: project ? project.title : '',
        display: project ? project.display : true,
        type: project ? project.type._id : ''
    });
    const onDrop = useCallback(([file]) => {
        if(file.type === 'image/jpeg' || file.type === 'image/png'){
            setThumbnailChange(true);
            setThumbnail(file);
            setPreviewThumbnail(URL.createObjectURL(file));
        } else {
            setDroperText('Your file is not an image')
        }
    }, []);
    const handleChange = e => {
        e.persist();
        setNewProject(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = e => {
        e.preventDefault();
        if(thumbnailChange){
            console.log(thumbnail);
        }
        if(projectId){
            console.log('Edit Project');
            console.log(newProject);
        } else {
            console.log('Add Project');
            console.log(newProject);
        }
    }
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
                    New Project
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
                            name="type"
                            defaultValue={newProject.type}
                            onChange={handleChange}
                        >
                            <option aria-label="None" value="" />
                            {data.getTypes.map(type => (
                                <option value={type._id} key={type._id}>{type.title}</option>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
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
                <Box textAlign="right">
                    {previewThumbnail && (
                        <Button className={classes.removeButton} onClick={() => setPreviewThumbnail('')}>
                            Remove thumbnail
                        </Button>
                    )}
                </Box>
            </Form>
        </CustomModal>
    );
};

const FETCH_TYPES_QUERY = gql` 
    {
        getTypes {
            _id
            title
        }
    }
`;