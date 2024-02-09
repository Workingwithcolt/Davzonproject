import React,{useState} from 'react'


const Manager = () => {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);

  function addActivity() {
      if (activity.trim() !== '') {
          setListData((prevListData) => {
              const updatedList = [...prevListData, activity];
              console.log(updatedList);
              setActivity('');
              return updatedList;
          });
      }
  }

  function removeActivity(i) {
      const updatedListData = listData.filter((element, id) => i !== id);
      setListData(updatedListData);
  }

  return (
    <div>
        <h1 className='Manager'>Manager Portal</h1>
       <label className='btn1'>Projects</label>
        <div className='container'>
          <div className="header">
              Tasks List
          </div>
          <input type="text" className='Maninput' placeholder="Add a Task" value={activity} onChange={(e) => setActivity(e.target.value)}/>
        
          <button className='Add' onClick={addActivity}>Add Task</button>
          {listData.length > 0 && listData.map((data, i) => (
              <p key={i}>
                  <div className="data">{data}</div>
                  <div className="btn-position">
                    <button  className='data' onClick={() => removeActivity(i)}>Remove Task</button>
                  <button className='data'>Assign Developer</button>
                  </div>
              </p>
          ))}
      </div>
       
        
        
    </div>
  )
}

export default Manager