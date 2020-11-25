import React from 'react';
import {
	Edit,
	ImageField,
	SimpleForm,
	TextInput,
} from 'react-admin';

// Class
export const PhotoEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			{/* <ReferenceInput source='albumId' reference='albums'>
				<SelectInput optionText='id' />
			</ReferenceInput> */}
			<TextInput source='id' />
			<TextInput source='title' />
			<ImageField source='url' title='title' />
			{/* <TextInput source='url' /> */}
			{/* <TextInput source='thumbnailUrl' /> */}
		</SimpleForm>
	</Edit>
);
