import { useState } from 'react';
import profiles from '../data/berlin.json';

export default function Facebook() {
    const [country, setCountry] = useState("all");
    const [profilsState, setProfilesState] = useState(profiles);
    
    const sortAscendingHandle = () => {
        const sorted = [...profilsState].sort((a, b) => a.firstName.localeCompare(b.firstName));
        setProfilesState(sorted);
    }

    const sortDescendingHandle = () => {
        const sorted = [...profilsState].sort((a, b) => b.firstName.localeCompare(a.firstName));
        setProfilesState(sorted);
    }

    const filterHandler = (e) => {
        setProfilesState(profiles.filter(profile => profile.firstName.includes(e.target.value)));
    }
    
    return(
        <>
            <input className="form-control me-2" style={{width: '200px', margin: '4px'}} type="search" onChange={filterHandler} placeholder="Filter..." aria-label="Search"/>
            <button className="btn btn-secondary" style={{margin: "4px"}} onClick={sortAscendingHandle}>Sort ascending</button>
            <button className="btn btn-secondary" style={{margin: "4px"}} onClick={sortDescendingHandle}>Sort descending</button>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button className="btn btn-primary" onClick={()=>setCountry("all")}>All</button>
                <button className="btn btn-primary" onClick={()=>setCountry("England")}>England</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Malaysia")}>Malaysia</button>
                <button className="btn btn-primary" onClick={()=>setCountry("USA")}>USA</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Germany")}>Germany</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Sweden")}>Sweden</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Nigeria")}>Nigeria</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Italy")}>Italy</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Scotland")}>Scotland</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Kazakhstan")}>Kazakhstan</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Russia")}>Russia</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Catalonia")}>Catalonia</button>
                <button className="btn btn-primary" onClick={()=>setCountry("France")}>France</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Israel")}>Israel</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Brazil")}>Brazil</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Taiwan")}>Taiwan</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Turkey")}>Turkey</button>
                <button className="btn btn-primary" onClick={()=>setCountry("Norway")}>Norway</button>
            </div>
            {profilsState.map(profile=> (
                <div key={profile.firstName}>
                    {profile.country === country ? 
                        <div className="card user-card" style={{backgroundColor: "blue", width: "179px"}}>
                            <button className="btn btn-primary" data-bs-target={"#exampleModalToggle"+profile.firstName} data-bs-toggle="modal"><img style={{height: "120px"}} src={profile.img} alt={profile.firstName}/></button>
                        </div> :
                        <div className="card user-card" style={{backgroundColor: "white", width: "179px"}}>
                            <button className="btn btn-primary" data-bs-target={"#exampleModalToggle"+profile.firstName} data-bs-toggle="modal"><img style={{height: "120px"}} src={profile.img} alt={profile.firstName}/></button>
                        </div>}

                        <div className="modal fade" id={"exampleModalToggle"+profile.firstName} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">{profile.firstName} details</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                        <p><span className='negrita'>First name: </span>{profile.firstName}</p>
                                        <p><span className='negrita'>Last name: </span>{profile.lastName}</p>
                                        <p><span className='negrita'>Country: </span>{profile.country}</p>
                                        {profile.isStudent ? 
                                            <p><span className='negrita'>Type: </span>Student</p> :
                                            <p><span className='negrita'>Type: </span>Teacher</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
        </>
    )
}
