import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Tickets = () => {
    const [tickets, setTickets] = useState([])
    const [taskStatus, setTaskStatus] = useState([])
    const [resolved, setResolved]= useState([])
    const [progressCount, setProgressCount] = useState(0)
    const [resolveCount, setResolveCount] = useState(0)
    useEffect(() => {
        fetch("/ticket.json")
            .then(res => res.json())
            .then(data => setTickets(data))

    }, []),
        console.log(tickets)
    const handleTaskStatus = (ticket) => {
        setTaskStatus([...taskStatus, ticket])
        setProgressCount(progressCount+1)
    }
    const handleComplete = (task) => {
        toast.success('problem solved successfully')
        const id = task.id;
        setTaskStatus(taskStatus => taskStatus.filter(taskId => taskId.id !== id))
        setResolved([...resolved,task])
        setProgressCount(progressCount - 1)
        setResolveCount(resolveCount+1)
        
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-2 gap-4 my-4'>
                <div className='bg-linear-to-r from-red-500 to-orange-500 text-center py-8 rounded-2xl'>
                    <h1 className='text-2xl font-bold'>In-progress</h1>
                    <p className='text-lg font-semibold'>{progressCount}</p>
                </div>
                <div className='bg-linear-to-r from-green-600 to-purple-700 text-center py-8 rounded-2xl'>
                    <h1 className='text-2xl font-bold'>Resolved</h1>
                    <p className='text-lg font-semibold'>{resolveCount }</p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-2 grid grid-cols-2 gap-4'>
                    {tickets.map(ticket => (
                        <div onClick={()=>handleTaskStatus(ticket)} className='bg-gray-300 my-2 p-4 rounded-2xl '>
                            <div className='flex justify-between'>
                                <h1 className='text-black text-xl font-bold'>{ticket.title}</h1>
                                {ticket.status === "Open" ?
                                    <button className='btn-success btn rounded-3xl '> 🟢 Open</button>
                                    :
                                    <button className='btn btn-alert rounded-3xl'>🟡 In-progress</button>}

                            </div>
                            <div className='my-4'>
                                <h2 className='text-gray-500'>{ticket.description}</h2>
                            </div>
                            <div className='flex justify-between items-end'>
                                <p className='text-gray-500'>#{ticket.id}</p>
                                <p className={`${ticket.priority === "High" ? "text-red-600" : ticket.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>{ticket.priority}</p>
                                <p>{ticket.customer}</p>
                                <p>{ticket.createdAt}</p>
                            </div>

                        </div>

                    ))}
                </div>
                <div>
                    <div>
                        <h1 className='text-xl font-bold text-center'>Task Status</h1>
                        {taskStatus.map((task) => (
                            <div key={task.id} className='bg-blue-300 p-4 rounded-2xl my-4'>
                                <h2 className='text-lg font-semibold text-center'>{task.title}</h2>
                                <button onClick={()=>handleComplete(task)} className='btn btn-success w-full my-2'>Complete</button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-center'>Resolved</h1>
                        {resolved.map((task) => (
                            <div key={task.id} className='bg-blue-300 p-4 rounded-2xl my-4'>
                                <h2 className='text-lg font-semibold text-center'>{task.title}</h2>
                                {/* <button onClick={()=>handleComplete(task)} className='btn btn-success w-full my-2'>Complete</button> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Tickets;