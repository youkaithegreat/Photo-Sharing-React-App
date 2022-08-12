import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UserPlaces = () => {
  const userId = useParams().uid;
  const loadedPlaces = DUMMY_PLACES.filter( ( place ) => place.creator === userId );
  return <PlaceList items={ loadedPlaces } />;
};

export default UserPlaces;
