import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { IUser } from '../models';

interface UserSearchComponentProps {
  user: Array<IUser>;
  onSearchHandler: (_: Array<IUser>) => void;
}
function UserSearchDetails({
	user,
	onSearchHandler,
}: UserSearchComponentProps) {
	const [searchStr, setSearchStr] = useState<string>('');
	const filterByName = (firstName: string) => (f: IUser): boolean => f.firstName.toLowerCase().includes(firstName.toLowerCase());
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const _searchValue = e.target.value;
		setSearchStr(_searchValue);
		if (_searchValue == '') {
			onSearchHandler(user);
			return;
		}
		onSearchHandler(user.filter(filterByName(_searchValue)));
	};
	return (
  <Grid item xs={12}>
  <TextField
  placeholder="Search by User Name"
  size="small"
  value={searchStr}
  onChange={onSearch}
  fullWidth
			/>
		</Grid>
	);
}
export default UserSearchDetails;
