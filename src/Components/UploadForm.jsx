export default function UploadForm ({uploader}){
    const handleChange = (e) =>{
        uploader(e.target.files[0])
    }
    return (
        <input className="up" type="file" accept ="image/*" onChange ={handleChange}/>
    )
}