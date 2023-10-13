import React, { useState } from "react";
const BookingForm = (props) => {
    const [date , setDate]=useState("");
    const [times , setTime]=useState("");
    const [guests , setGuest]=useState("");
    const [occasion , setOccastion]=useState("");

    const handleSubmit = (e) =>{
            e.preventDefault();
            props.SubmitForm(e);
    }
    const handleChange = (e)=>{
        setDate(e);
        props.dispatch(e);
    }
    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date" >Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e)=>handleChange(e.target.value)} type="date" required />
                        </div>

                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e)=>setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes=>{return<option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guest:</label>
                            <input id="book-guests" min='1' value={guests} onChange={(e)=>setGuest(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="book-occasion" >Select Occasion :</label>
                            <select id="book-occasion" value={occasion} onChange={(e)=>setOccastion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input aria-label="On click" type="submit" value={"Make  your reservation"}/>
                        </div>

                    </fieldset>
                </form>
            </section>

        </header>
    );
};
export default BookingForm;
