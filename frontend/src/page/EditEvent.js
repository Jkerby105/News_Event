import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

import { useRouteLoaderData } from "react-router-dom";

function EditEventPage(){
    const data = useRouteLoaderData('event-detail');

    return(
            <EventForm method='PATCH' event={data.event}/>
    )
}

export default EditEventPage;