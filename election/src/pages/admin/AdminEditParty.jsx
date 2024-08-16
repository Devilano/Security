import React, {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSinglePartyApi, updatePartyApi } from "../../apis/Api"
import { toast } from "react-toastify"

 
const AdminEditParty = () => {
 
  // receive product id from url
  const {id} = useParams()

  //Navigator

  const Navigate =useNavigate();
 
  // use effect to fetch product details
  useEffect(() => {
    // api call
    getSinglePartyApi(id).then((res) => {
      console.log(res.data)
      setPersonName(res.data.party.personName)
      setPersonParty(res.data.party.personParty)
      setPersonPosition(res.data.party.personPosition)
      setPersonRanking(res.data.party.personRanking)
      setLastElectedfrom(res.data.party.personRanking)
      setHomeTown(res.data.party.homeTown)

      setOldImage(res.data.party.personImageUrl)
    })
  },[id])
 
  // make usestate
  const [personName, setPersonName] = useState('')
  const [personParty, setPersonParty] = useState('')
  const [personPosition, setPersonPosition] = useState('')
  const [personRanking, setPersonRanking] = useState('')
  const [lastelectedFrom, setLastElectedfrom] = useState('')
  const [homeTown, setHomeTown] = useState('')

 
  // make useState for image
  const [personImage, setPersonImage] = useState(null)
  const[previewImage, setPreviewImage] = useState(null)
  const[oldImage, setOldImage] = useState('')
 
 
 
  // handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    setPersonImage(file)
    setPreviewImage(URL.createObjectURL(file))
  }
 
  // make function for button
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(personName,personParty,personPosition,personRanking,homeTown,lastelectedFrom)
    console.log(personImage)
  

  //make a form data

  const formData = new FormData();
  formData.append('personName', personName)// destruction name from backend
  formData.append('personParty', personParty)
  formData.append('personPosition', personPosition)
  formData.append('personRanking', personRanking)
  formData.append('homeTown',homeTown)
  formData.append('lastelectedFrom',lastelectedFrom)
  formData.append('personImage', personImage)
  // formData.append('partyImage',partyImage)

  // Making API call
  updatePartyApi(id,formData).then((res=>{
    if(res.data.sucess==true){
        toast.success(res.data.message)
        Navigate('adminP')
    }else{
        toast.error(res.data.message)
    }
  }).catch(err=>{
    toast.error('Server Error')
  })
  )

  
  }


 
  return(
    <div style={{marginTop:"200px"}}>
    
      <h2 className="m-4" >Updating product for <span className="txt-danger" >'{personName}'</span></h2>
      <div className="d-flex m-4 gap-4">
        <div className="">
        <form>
            <label className="mb-1">Person Name</label>
            <input value={personName} onChange={(e) => setPersonName(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter Person name"/>

            <label className="mb-1">Person Party</label>
            <input value={personParty} onChange={(e) => setPersonParty(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter Person party"/>

            <label className="mb-1">Person Position</label>
            <input value={personPosition} onChange={(e) => setPersonPosition(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter Person position"/>

            <label className="mb-1">Person Ranking</label>
            <input value={personRanking} onChange={(e) => setPersonRanking(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter Person ranking"/>

            <label className="mb-1">Home Town</label>
            <input value={homeTown} onChange={(e) => setHomeTown(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter Home town"/>

            <label className="mb-1">Last Elected From</label>
            <input value={lastelectedFrom} onChange={(e) => setLastElectedfrom(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter Last elected from"/>

            <label className="mb-1">Person Image</label>
            <input onChange={handleImageUpload} type="file" className="form-control mb-2"/>

            <button onClick={handleSubmit}  className="btn btn-primary w-100 mt-2">Update Party</button>
          </form>
        </div>
 
        <div>
          <h6>Old Image</h6>
          <img src={oldImage} className="object-fit cover rounded-3" alt="" height={140} width={180} />
          <hr />
            {
              previewImage && <>
            <h6 className="mt-3">New Image</h6>
            <img src={previewImage} alt="" height={140} width={180} />
            </>
            }
          </div>
      </div>
    </div>
  )
}
 
export default AdminEditParty