import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {  createPartyApi, deletePartyApi, getAllPartyApi } from '../../apis/Api'
import { Link } from 'react-router-dom'

const AdminPartyDashboard = () => {

    //  make useState 
    const [personName, setPersonName] = useState('')
    const [personParty, setPersonParty] = useState('UML')
    const [personPosition, setPersonPosition] = useState('')
    const [personRanking, setPersonRanking] = useState('')
    const [lastelectedFrom, setLastelectedFrom] = useState('')
    const [homeTown, setHomeTown] = useState('')

    const [personImage, setPersonImage] = useState(null)
    // const [partyImage, setPartyImage] = useState(null)

    const [previewImage, setPreviewImage] = useState(null)

    // useEffect for fetching all the products and showing in table
    const [party, setParty] = useState([])
    useEffect(() => {
        getAllPartyApi().then((res) => {
            console.log(res.data);
            setParty(res.data.party);
        })
    }, [])

    // assign for every input box

    const changePEName = (e) => {
        setPersonName(e.target.value)
    }

    const changePParty = (e) => {
        setPersonParty(e.target.value)
    }

    const changePPosition = (e) => {
        setPersonPosition(e.target.value)
    }

    const changeHTown = (e) => {
        setHomeTown(e.target.value)

    }
    const changeLElection = (e) => {
        setLastelectedFrom(e.target.value)

    }
    const changePRanking = (e)=>{
        setPersonRanking(e.target.value)
    }
    

    // function for image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0] 
        setPersonImage(file)
        setPreviewImage(URL.createObjectURL(file))

    }
    

    // handle submit 
    const handleSubmit = (e) => {
        e.preventDefault()
        // form data is nit needed here in react but for image no needed


        // making logical form data 
        const formData = new FormData();
        formData.append('personName', personName)// destruction name from backend
        formData.append('personParty', personParty)
        formData.append('personPosition', personPosition)
        formData.append('personRanking', personRanking)
        formData.append('homeTown',homeTown)
        formData.append('lastelectedFrom',lastelectedFrom)
        formData.append('personImage', personImage)
        // formData.append('partyImage',partyImage)
        console.log(formData)


        // making Api call
        createPartyApi(formData).then((res) => {
            if (res.data.success == false) {
                toast.error(res.data.message)
            } else {
                toast.success(res.data.message)
            }

        }).catch(e => {
            toast.error("Server Error");
            console.log(e);
        }

        )
    }

    //delete Party Function
    const handleDelete = (id) =>{
        const confirmDialog = window.confirm("Are you sure want to delete")
        if (!confirmDialog){
            return;
        }else{
            //make api call
            deletePartyApi(id).then((res)=>{
                if(res.data.sucess== true){
                    toast.success(res.data.message)
                    window.location.reload()
                }else{
                    toast.error(res.data.message)
                }
            })


        }
    }

    return (
        <>
            <div className='m-4' >
                <div className='d-flex justify-content-between'style={{marginTop:"180px"}} >
                    <h2>
                        Admin PartyDashboard
                    </h2>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Details
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">List</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="" method="post" className='form-control m-2 p-2'>
                                        <input type="text" onChange={changePEName} className='form-control mb-2' placeholder='Person Name' />
                                        <input type="text" onChange={changePRanking} className='form-control mb-2' placeholder='Person Rank' />
                                        <input type="text" onChange={changeHTown} className='form-control mb-2' placeholder='Home Town' />
                                        <input type="text" onChange={changePPosition} className='form-control mb-2' placeholder='Current Position' />


                                        <select name="Categories" onChange={changePParty} className='form-control mb-2'>
                                            <option value="UML">UML</option>
                                            <option value="Congress">Congress</option>
                                            <option value="RSP">RSP</option>
                                            <option value="Maoist">Maoist</option>
                                        </select>
                                        <textarea onChange={changeLElection} className='form-control mb-2' cols='3' placeholder='Last Elected Data'></ textarea>

                                        <input type="file" onChange={handleImageUpload} alt="image" width="48" height="48" />


                                        {
                                            previewImage && <img className='img-fluid rounded object-fit-fit' src={previewImage} alt='personImage' height={50} width={50} />
                                        }


                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary rounded" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary rounded" onClick={handleSubmit}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <table className="table table-stripped  mt-2">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Person Image</th>
                            <th scope="col">Person Name</th>
                            <th scope="col">Person Positon</th>
                            <th scope="col">HomeTown</th>

                            <th scope="col">Ranking</th>
                            <th scope="col">Parties</th>
                            <th scope="col">LastElection</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            party.map((item) => (<tr>
                                <td><img src={item.personImageUrl} height={20} width={20} alt="" /></td>

                                <td>{item.personName}</td>
                                <td>{item.personParty}</td>
                                <td>{item.personPosition}</td>
                                <td>{item.personRanking}</td>
                                <td>{item.homeTown}</td>

                                <td>{item.lastelectedFrom.slice(0, 10)}</td>
                                <td><div className='btn-group' role='group'>
                                    <Link to ={`/admin/edit/${item._id}`} className='btn btn-success'>Edit</Link>
                                    <button onClick={()=>handleDelete(item._id)} className='btn rounded btn-danger'>Delete</button>
                                </div>
                                </td> 
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default AdminPartyDashboard