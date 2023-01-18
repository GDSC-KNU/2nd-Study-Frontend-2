import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Timer = ({ mm, ss, count }) => {
	const [minutes, setMinutes] = useState(parseInt(mm));
	const [seconds, setSeconds] = useState(parseInt(ss));
	let { no } = useParams();
	const navigate = useNavigate();


	useEffect(() => {
		const countdown = setInterval(() => {
			if (parseInt(seconds) > 0) {
				setSeconds(parseInt(seconds) - 1);
			}
			if (parseInt(seconds) === 0) {
				if (parseInt(minutes) === 0) {
					clearInterval(countdown);
					if (no == 1) {
						navigate("/stageClear/1");
						localStorage.setItem("score1", count);
					}
					if (no == 2) {
						navigate("/stageClear/2");
						localStorage.setItem("score2", count);
					}
					if (no == 3) {
						localStorage.setItem("score3", count);
						navigate("/GameAllClear");
					}
					

				} else {
					setMinutes(parseInt(minutes) - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => clearInterval(countdown);
	}, [minutes, seconds]);
	
	return (
		<div>
			{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
		</div>
	);
};

export default Timer;