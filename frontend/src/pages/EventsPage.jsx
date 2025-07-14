import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          
          {
          allEvents && allEvents.length !== 0 && (
            //<EventCard active={true} data={allEvents && allEvents[0]} />
            <>  
              {allEvents && allEvents.map((i, index) => <EventCard data={i} key={index} />)}
            </>
          )
         }
         <h4 className="w-full flex justify-center">{
           allEvents?.length === 0 && (
            'No Promotions!'
           )
          }

         </h4>
        </div>
      )}
    </>
  );
};

export default EventsPage;
