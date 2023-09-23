import { CreatedFlagContext } from "@/context/CreatedFlagContext";
import { createBooking, getStoreLocation } from "@/services";
import { useEffect, useState ,useContext} from "react";

function Form({car}:any) {
  const [storeLocation,setStoreLocation] = useState<any>([])
  const {showToastMsgs, setShowToastMsgs} = useContext(CreatedFlagContext)
  const [formValue, setFormValue] = useState<any>({
    location:'',
    pickUpDate:'',
    dropOffDate:'',
    pickUpTime:'',
    dropOffTime:'',
    contactNumber:'',
    userName:'Rahul Sanap',
    carId: {
      connect:''
    }

  })

  const getStoreLocation_ = async ()=> {
    const respo:any = await getStoreLocation();
    console.log(respo);
    setStoreLocation(respo?.storesLocations);
    
  }

  const handleChange = (e:any)=> {
    setFormValue({
      ...formValue,
      [e.target.name]:e.target.value
    })
   
  }

  const handleSubmit = async ()=> {
    console.log(formValue);
    const resp = await createBooking(formValue)
    console.log(resp);
    if(resp){
      setShowToastMsgs(true)
    }
    
    
  }
  useEffect(()=> {
    getStoreLocation_();
  },[])

  useEffect(()=>{
    if(car){
      setFormValue({
        ...formValue,
        carId: {
          connect:{id:car.id}
        }
      })
    }
  },[car])

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400 PichUp m-1">PichUp Location</label>
        <select
          className="select select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            PichUp Location
          </option>
          {storeLocation && storeLocation.map((loca:any , index:number)=> (
            <option key={index}>{loca?.address}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            className="
          input input-bordered w-full max-w-lg"
         
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex  gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            name="pickUpTime"
            onChange={handleChange}

            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            onChange={handleChange}
            name="dropOffTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type here"
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"

        />
      </div>
      <div className="modal-action">
      <form method="dialog">
      <button className="btn">Close</button>
      <button onClick={handleSubmit} className="btn bg-blue-500 text-white ml-2 hover:bg-blue-800">save</button>
      </form>
    </div>
    </div>
  );
}

export default Form;
