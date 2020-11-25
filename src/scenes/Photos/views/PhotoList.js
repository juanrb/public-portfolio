import React from 'react';
import {
	Datagrid,
	ImageField,
	List,
	TextField,
	UrlField,
} from 'react-admin';


export const PhotoList = props => (
	<List {...props}>
		<Datagrid rowClick='edit'>
			<TextField source='id' />
			<TextField source='title' />
			<UrlField source='url' />
			<ImageField source='thumbnailUrl' label='Thumbnail' />
		</Datagrid>
	</List>
);
