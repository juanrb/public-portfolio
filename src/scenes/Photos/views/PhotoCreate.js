import React from 'react';
import {
	Create,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
} from 'react-admin';

// Class
export const PhotoCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source='userId' reference='users'>
				<SelectInput optionText='name' />
			</ReferenceInput>

			<TextInput source='title' />
			<TextInput multiline source='body' />
		</SimpleForm>
	</Create>
);
