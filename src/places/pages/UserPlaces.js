import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Buiilding",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/267725706_10226632305424125_5309604990072239545_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HF8IpaRwb1gAX-6RaEh&_nc_ht=scontent-hou1-1.xx&oh=00_AT-_AvzqcAaRUuQVBCUvjHp6GZ1_8FUVldLOVp8iyrB5sQ&oe=62F4EB0B",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.987854,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Buiilding",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/267725706_10226632305424125_5309604990072239545_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HF8IpaRwb1gAX-6RaEh&_nc_ht=scontent-hou1-1.xx&oh=00_AT-_AvzqcAaRUuQVBCUvjHp6GZ1_8FUVldLOVp8iyrB5sQ&oe=62F4EB0B",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.987854,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().uid;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
