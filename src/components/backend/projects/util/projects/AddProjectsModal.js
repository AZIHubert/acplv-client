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

export default ({open, handleClose}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const {loading, data} = useQuery(FETCH_TYPES_QUERY);
    const [droperText, setDroperText] = useState('Drag \'n\' drop the thumbnail here, or click to select file');
    const [previewThumbnail, setPreviewThumbnail] = useState('');
    const onDrop = useCallback(([file]) => {
        if(file.type === 'image/jpeg' || file.type === 'image/png'){
            setPreviewThumbnail(URL.createObjectURL(file));
        } else {
            setDroperText('Your file is not an image')
        }
    }, []);
    const {getRootProps, getInputProps} = useDropzone({onDrop});
    return (
        !loading && <CustomModal open={open} handleClose={handleClose}>
            <Box className={classes.titleContainer}>
                <Typography variant="h2">
                    New Project
                </Typography>
            </Box>
            <Form>
                <CustomTextField
                    paddingBottom
                    fullWidth
                    label="Title"
                    name="title"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color='primary' />}
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
                            <Typography variant="body1" className={classes.droperText}>{droperText}</Typography>
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