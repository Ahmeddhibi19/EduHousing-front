import React, { useState,useRef,useEffect  } from 'react';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReactMapGL, { Marker, Popup,Map, GeolocateControl, NavigationControl,DragPanHandler, Layer  } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {DoubleClickZoom } from 'react-map-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import ServerResponse from '../ServerResponse';
import axios from 'axios'

const AddCollege = () => {

  const [collegeData, setCollegeData] = useState({
    latitude: '',
    longitude: '',
    address: '',
    name: '',
  });
  const[calledCity,setCalledCity]=useState([]);
  const[cityId , setCityId]=useState('')
  const [overlay, setOverlay] = useState(false);
  const [responseData, setResponseData] = useState('');
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: 34.0479, // Center of the Earth
    longitude: 9.5183, // enter of the Earth
    zoom: 5, //
  });
  const [clickedLocation, setClickedLocation] = useState(null);
  const handleChange = (e) => {
    console.log(e.target.value);
    setCityId(e.target.value);
  };
  const accessToken = localStorage.getItem('accessToken');
  useEffect(()=>{
    axios.get(`http://localhost:8081/api/EduHousing/v1.0.0/city/findAll` , 
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
          }
    }
)
    .then(response=>{
        setCalledCity(response.data)
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
    

 },[])
 const [mousePosition, setMousePosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollegeData({ ...collegeData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!collegeData.latitude || !collegeData.longitude || !collegeData.address ){
      console.log('Please fill all the required fields');
      setResponseData('Please fill all the required fields');
      return;
    }
    const college={
      latitude:collegeData.latitude,
      longitude:collegeData.longitude,
      address:collegeData.address,
      name:collegeData.name
      
    }
   
    axios.post(`http://localhost:8081/api/EduHousing/v1.0.0/college/admin/create/${cityId}`, college, {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})

    .then(res=>{
      setResponseData('apartment saved successfully');
    })
    .catch((error)=>{
      console.log(error);setResponseData(error)
    })
    // Handle form submission, e.g., send data to backend
    console.log(collegeData);
    setOverlay((e)=>!e);
  };

  const handleMapClick = (event) => {
    const { lngLat } = event;
    if (lngLat) {
      const { lng, lat } = lngLat;
      console.log(lng,lat)
      setClickedLocation({ latitude: lat, longitude: lng });
      setCollegeData({
        ...collegeData,
        latitude: lat,
        longitude: lng,
      });
     
    }
  };
  const handleViewportChange = (newViewport) => {
    setViewport({ ...newViewport });
  };
  const handleDoubleClick = (event) => {
    const newZoom = Math.min(viewport.zoom + 1, 20);
    setViewport({
      ...viewport,
      zoom: newZoom,
    });
  };
  const handleZoomIn = (event) => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      zoom: Math.min(prevViewport.zoom + 1, 20),
    }));
  };

  const handleZoomOut = () => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      zoom: Math.max(prevViewport.zoom - 1, 1),
    }));
  };

  const handleScroll = (event) => {
    const delta = event.deltaY;
    const newZoom = delta > 0 ? Math.max(viewport.zoom - 1, 1) : Math.min(viewport.zoom + 1, 20);
    setViewport({
      ...viewport,
      zoom: newZoom,
    });
  };
  const handleDragEnd = (event) => {
    const { lngLat } = event;
    if (lngLat) {
      setViewport({
        ...viewport,
        longitude: lngLat[0],
        latitude: lngLat[1],
      });
    }
  };
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - mousePosition.x;
    const deltaY = event.clientY - mousePosition.y;
    const newViewport = {
      ...viewport,
      longitude: viewport.longitude - deltaX / 1000, // Adjust the divisor as needed for sensitivity
      latitude: viewport.latitude + deltaY / 1000, // Adjust the divisor as needed for sensitivity
    };
    setViewport(newViewport);
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
    console.log(deltaX,deltaY)
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  /*const map = mapRef.current.getMap();
console.log(map.getZoom());*/


const handleSearchResult = (event) => {
  const { result } = event;
  const { center, place_name } = result;

  // Update the map viewport to center on the selected location
  setViewport({
    ...viewport,
    latitude: center[1],
    longitude: center[0],
    zoom: 12, // Adjust the zoom level as needed
  });

  // Optionally, you can also display the selected location's name
  console.log('Selected location:', place_name);
};



  return (

      <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px] px-3' onWheel={handleScroll}>
        <div className='w-full flex justify-center items-center my-20'>
          <h1 className='text-[25px] font-bold text-gray-500'>Add College</h1>
        </div>
        <div className='w-full flex flex-row justify-start items-start mb-3 px-4 text-orange-600 border-2 border-orange-600 mx-1 rounded-md bg-red-50'>
        <FontAwesomeIcon icon={faExclamationCircle} className='mt-1 mr-1'/>
          <h1 className='text-[18px] font-bold '>Please make sure to select the college location on the map meticulously, as the system relies on accurate coordinates for extraction.
          </h1>
        </div>
        <div className='w-full lg:w-[800px] h-[400px] lg:ml-[10%]'>
  
          <Map
          
          initialViewState={viewport}
          
           mapboxAccessToken='pk.eyJ1IjoiYWhtZWRkaGliaSIsImEiOiJjbHVvM3BzejAxbHRyMmpuMmd1Z3Z0N202In0.HFSapqeyn6WqqQT9XjrsQA'
           onViewportChange={handleViewportChange}
           onClick={handleMapClick}
           onDoubleClick={(event) => {
            const newZoom = Math.min(viewport.zoom + 1, 20);
            setViewport({
              ...viewport,
              zoom: newZoom,
            });
          }}
          onDragEnd={handleDragEnd}
            style={{ width: '100%', height: '100%' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          
           mapStyle="mapbox://styles/mapbox/streets-v11"
         
           dragPan={true}
          
          
          >
            {clickedLocation && (
              <Marker
                longitude={clickedLocation.longitude}
                latitude={clickedLocation.latitude}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <div>You clicked here</div>
              </Marker>
              
            )}
            <NavigationControl />
            <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
         {/* 
  <MapboxGeocoder
    mapboxApiAccessToken='pk.eyJ1IjoiYWhtZWRkaGliaSIsImEiOiJjbHVvM3BzejAxbHRyMmpuMmd1Z3Z0N202In0.HFSapqeyn6WqqQT9XjrsQA'
    placeholder="Search for places"
    onResult={handleSearchResult}
    position="top-left"
  />
  */}
          
          </Map>
  
       
        </div>
        <form onSubmit={(e)=>e.preventDefault} className='w-full'>
          <div className='mb-4'>
            <label htmlFor='latitude' className='block text-gray-700 font-bold mb-2'>
              Latitude
            </label>
            <input
              type='text'
              id='latitude'
              name='latitude'
              value={collegeData.latitude}
              onChange={handleInputChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
              placeholder='latitude'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='longitude' className='block text-gray-700 font-bold mb-2'>
              Longitude
            </label>
            <input
              type='text'
              id='longitude'
              name='longitude'
              value={collegeData.longitude}
              onChange={handleInputChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
              placeholder='Enter longitude'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={collegeData.name}
              onChange={handleInputChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
              placeholder='Enter college name'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='address' className='block text-gray-700 font-bold mb-2'>
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              value={collegeData.address}
              onChange={handleInputChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
              placeholder='Enter address'
              required
            />
          </div>
        
         
          
          
          <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto  p-2  flex flex-col'>
        <h1 className='text-[18px] my-5 font-bold  text-gray-600'>choose the college City :</h1>
        <select
    value={cityId}
    onChange={(e)=>setCityId(e.target.value)}
    className='w-full sm:w-full md:w-[437px] lg:w-[477px] border-[1px] border-gray-500 pl-3 mb-[50px] focus:outline-none focus:border-green-500'
  >
  <option value="">Select a city</option>
    {calledCity.map(city => (
      <option key={city.id} value={city.id}>{city.name}</option>
    ))}
  </select>
  
  
      </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2'
            onClick={handleSubmit}
          >
            Add College
          </button>
        </form>
        
        {overlay ? <ServerResponse onClose={() => setOverlay(false)} responseData={responseData.message} /> : null}
      </div>
    );
  };

export default AddCollege