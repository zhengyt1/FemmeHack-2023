import { useEffect, useState } from 'react';
import Display from './Display';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { message } from 'antd';
import './Home.css';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  100: '#eaeef2',
  300: '#afb8c1',
  900: '#24292f',
};

const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
  `,
);

export default function Home(props) {
	const [messageApi, contextHolder] = message.useMessage();
	const [data, setData] = useState([]);
	
	const clickReport = () => {
		console.log("in click")
		const place = document.getElementById('place').value;
		const date = document.getElementById('date').value;
		const time = document.getElementById('time').value;
		const event = document.getElementById("event").value;
		if (place === '' || date === '' || event === '' === true) {
			messageApi.info("Please enter all fields");
			return;
		}
		const newData = {
			"id": "0",
			"time": "12 PM, Feb 6th",
			"title": "miao",
			"description": "miaomiaomiao",
		}
		if (data[date]) {
			// upload
			// setData([..., ])
		}
	}
	useEffect(() => {
		const tmp = [
			{
				"time": "Feb 5th",
				"posts": [
					{
						"id": "0",
						"time": "12 PM, Feb 6th",
						"title": "miao",
						"description": "miaomiaomiao",
					},
					{
						"id": "0",
						"time": "12 PM, Feb 6th",
						"title": "miao",
						"description": "miaomiaomiao",
					},
				],
			},
			{
				"time": "Feb 6th",
				"posts": [
					{
						"id": "1",
						"time": "12 PM, Feb 6th",
						"title": "miao",
						"description": "miaomiaomiao",
					},
				],
			},
			{
				"time": "Feb 7th",
				"posts": [
					{
						"id": "2",
						"time": "12 PM, Feb 7th",
						"title": "miao",
						"description": "miaomiaomiao",
					},
				],
			},
		]
		setData(tmp);
	}, [])
	return (
		<div className='home-container'>
			{contextHolder}
			<div className='display'>
				<Display data={data} />
			</div>
			<div className='report'>
				<div className='report-title'>report</div>
				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '25ch' },
					}}
					noValidate
					autoComplete="off"
				>
					<div className='report-form'>
						<TextField
							required
							id="event"
							label="event name"
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<TextField
							required
							id="place"
							label="place"
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<TextField
							required
							id="date"
							label="date"
							// type="number"
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<CustomButton onClick={clickReport}>Submit</CustomButton>
					</div>
				</Box>
			</div>
		</div>
	)
}