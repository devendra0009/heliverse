import React, { useEffect, useState } from 'react';
import mockData from '../data/mock_data.json';
import DisplayData from './DisplayData';
import { ImSearch } from 'react-icons/im';

const Home = () => {
  const [mData, setMdata] = useState(mockData);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [available, setAvailable] = useState();

  const uniqueGenders = [...new Set(mockData.map((item) => item.gender))];
  const uniqueDomains = [...new Set(mockData.map((item) => item.domain))];

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = mockData.filter(
      (data) => data.first_name === e.target[0].value
    );
    setMdata(result);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedGender, selectedDomain, available]);

  const applyFilters = () => {
    let filteredData = mockData;
    if (selectedGender) {
      if (selectedGender === 'all') filteredData = mockData;
      else {
        filteredData = filteredData.filter(
          (item) => item.gender === selectedGender
        );
      }
    }
    if (selectedDomain) {
      if (selectedDomain === 'all') {
        if (selectedGender === 'all') filteredData = mockData;
        else {
          filteredData = filteredData.filter(
            (item) => item.gender === selectedGender
          );
        }
      } else {
        filteredData = filteredData.filter(
          (item) => item.domain === selectedDomain
        );
      }
    }
    if (available === 'true') {
      filteredData = filteredData.filter((item) => item.available === true);
    }
    if (available === 'false') {
      filteredData = filteredData.filter((item) => item.available === false);
    }
    setMdata(filteredData);
  };
  const handleGenderChange = (e) => {
    let value = e.target.value;
    setSelectedGender(value);
  };
  const handleDomainChange = (e) => {
    let value = e.target.value;
    setSelectedDomain(value);
  };
  const handleAvailableChange = (e) => {
    let value = e.target.value;
    setAvailable(value);
  };
  return (
    <div className="min-h-[80vh]">
      <div className="allFilters lg:flex lg:gap-5 lg:items-center lg:justify-between mx-16">
        <form
          onSubmit={handleSubmit}
          className=" my-8 "
        >
          <div className="border-2 mb-4 flex items-center px-4">
            <ImSearch />
            <input
              type="text"
              placeholder="Search a User"
              className="p-2 text-white border-none bg-transparent focus:outline-none "
            />
          </div>
          <button
            className="bg-green-500 mx-auto px-3 rounded text-black"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="selectFilters grid sm:grid-cols-1 md:grid-cols-3 lg:flex lg:justify-center gap-4 lg:items-center">
          <select
            name="gender"
            id="gender"
            value={selectedGender}
            className="bg-emerald-500 px-4 py-2 rounded cursor-pointer text-black"
            onChange={handleGenderChange}
          >
            <option value="all">All</option>
            {uniqueGenders.map((item, idx) => (
              <option value={item} id={idx} >
                {item}
              </option>
            ))}
          </select>

          <select
            name="domains"
            id="domains"
            value={selectedDomain}
            className="bg-emerald-500 px-4 py-2 rounded cursor-pointer text-black"
            onChange={handleDomainChange}
          >
            <option value="all" >All</option>
            {uniqueDomains.map((item, idx) => (
              <option value={item} id={idx}>
                {item}
              </option>
            ))}
          </select>
          <select
            name="available"
            id="available"
            className="bg-emerald-500 px-4 py-2 rounded cursor-pointer text-black"
            onChange={handleAvailableChange}
          >
            <option value={false}>Not Available</option>
            <option value={true}>Available</option>
          </select>
        </div>
      </div>
      <DisplayData data={mData} itemsPerPage={20}  />
    </div>
  );
};

export default Home;
