import { useEffect, useState } from 'react';
import Display from './Display';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { message } from 'antd';
import './Home.css';
import { getEvents, createEvent } from '../mockAPI/mockAPI';

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
	// const [reportdate, setDate] = useState(null);
	const [reportTime, setTime] = useState(null);

	const clickReport = async () => {
		console.log("in click")
		const location = document.getElementById('location').value;
		// const date = document.getElementById('date');
		// const time = document.getElementById('time');
		const event = document.getElementById("event").value;
		const status = event.Status;
		const picture = event.pic
		if ((location === '' || reportTime === null || event === '') === true) {
			messageApi.info("Please enter all fields");
			return;
		}
		const newEvent = {
			"createdAt": new Date(),
			"eventTime": reportTime,
			"Location": location,
			"eventName": event,
			"comments": [],
			"Status" : status,
			"pic": picture,
			// "id": "1"
		}
		await createEvent(newEvent);
		await fetchData();
	}
	function formatDate(date) {
		var d = new Date(date),
			month = d.toLocaleString('default', { month: 'short' }),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2)
			month = '0' + month;
		if (day.length < 2)
			day = '0' + day;

		return [month, day, year].join(' ');
	}
	async function fetchData() {
		var eventsData = await getEvents();
		// One event be like: 
		// { 
		// 	"createdAt": "2023-02-10T21:12:34.573Z",
		// 	"eventTime": "2041-08-09T02:12:03.148Z",
		// 	"Location": "Location 1",
		// 	"eventName": "eventName 1",
		// 	"comments": [],
		// 	"id": "1"
		//   },

		const eventsdict = eventsData.reduce((eventsdict, event) => {
			const eventDate = formatDate(event.eventTime);
			if (eventsdict[eventDate] !== undefined)
				eventsdict[eventDate] += event;
			else {
				eventsdict[eventDate] = [event];
			}
			return eventsdict;
		}, {});
		var dateEventsArray = [];
		for (const [key, value] of Object.entries(eventsdict)) {
			// console.log(key, value);
			const dateEvents = {
				"time": key,
				"events": value
			}
			dateEventsArray.push(dateEvents);
		}
		// console.log(dateEventsArray);

		if (dateEventsArray !== undefined) {
			dateEventsArray = dateEventsArray.sort(
				(a, b) => (a.events[0].eventTime > b.events[0].eventTime ? 1 : -1),
			);
			console.log(dateEventsArray);
			setData(dateEventsArray);
		}
		// console.log(data);
	}
	useEffect(() => {

		fetchData();
	}, [])
	// console.log(data);
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
							id="location"
							label="location"
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateTimePicker
							renderInput={(props) => <TextField id="time"{...props} />}
							label="DateTimePicker"
							value={reportTime}
							
							onChange={(newValue) => {
								setTime(newValue);
							}}
						/>
						</LocalizationProvider>
						<CustomButton className='submit' onClick={clickReport}>Submit</CustomButton>
					</div>
				</Box>
			</div>
		</div>
	)
}