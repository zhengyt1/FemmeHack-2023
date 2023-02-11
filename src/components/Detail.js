import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Detail.css';

export default function Detail() {
  return (
		<div>
			<Link to='/'>
				<ArrowBackIcon />
			</Link>
			<div className='detail-container'>
				<div className='detail-left'>
					xixi
				</div>
				<div className='detail-right'>
					mao
				</div>
			</div>
		</div>
	)
}