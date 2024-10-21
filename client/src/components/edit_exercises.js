import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import './style.css';

function EditExercise() {
  const { id } = useParams();
  const userInputRef = useRef();

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${process.env.REACT_APP_API_URL_DEPLOYED}/exercises/` + id , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(`${process.env.REACT_APP_API_URL_DEPLOYED}/users`)
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  }

  const onChangeDate = (date) => {
    setDate(date);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username : userInputRef.current.value,
      description,
      duration,
      date
    };


    const token = localStorage.getItem('token');
    axios.post(`${process.env.REACT_APP_API_URL_DEPLOYED}/exercises/update` + id, exercise , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => console.log(res.data));

    window.location = '/exercises';
  }

  return (
    <div className="form-container">
      <h3 className='create-title'>Edit Exercise Log</h3>
      <form onSubmit={onSubmit} className="exercise-form">
        <div className="form-group">
          <label className="label">Username: </label>
          <select
            ref={userInputRef}
            required
            className="form-control select-input"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="label">Description: </label>
          <input
            type="text"
            required
            className="form-control text-input"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label className="label">Duration (in minutes): </label>
          <input
            type="text"
            className="form-control text-input"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label className="label">Date: </label>
          <div className="date-picker">
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn submit-button" />
        </div>
      </form>
    </div>
  );
}

export default EditExercise;
