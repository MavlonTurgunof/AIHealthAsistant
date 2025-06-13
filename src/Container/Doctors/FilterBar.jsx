import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FaChevronDown, FaUpDown } from "react-icons/fa6";
import { BiDownArrow } from "react-icons/bi";

const genders = ["All", "Male", "Female", "Other"];
const regions = ["All", "Tashkent", "Chilonzor", "Olmazor", "Mirobod"];

function FilterBar({ onSearch }) {
  const [selectedGender, setSelectedGender] = useState(genders[0]);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
      {/* Gender Dropdown */}
      <Listbox value={selectedGender} onChange={setSelectedGender}>
        <div className="relative">
          <Listbox.Button className="w-40 py-2 pl-4 pr-10 text-left bg-white border rounded-full shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {selectedGender}
            <FaChevronDown className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-40 bg-white border rounded-lg shadow-lg z-10">
            {genders.map((gender) => (
              <Listbox.Option
                key={gender}
                value={gender}
                className={({ active }) =>
                  `cursor-pointer px-4 py-2 ${
                    active ? "bg-blue-100" : "text-gray-900"
                  }`
                }
              >
                {gender}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      {/* Region Dropdown */}
      <Listbox value={selectedRegion} onChange={setSelectedRegion}>
        <div className="relative">
          <Listbox.Button className="w-40 py-2 pl-4 pr-10 text-left bg-white border rounded-full shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {selectedRegion}
            <FaChevronDown className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-40 bg-white border rounded-lg shadow-lg z-10">
            {regions.map((region) => (
              <Listbox.Option
                key={region}
                value={region}
                className={({ active }) =>
                  `cursor-pointer px-4 py-2 ${
                    active ? "bg-blue-100" : "text-gray-900"
                  }`
                }
              >
                {region}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch?.(e.target.value, selectedGender, selectedRegion);
        }}
        placeholder="Search specialty..."
        className="border border-gray-300 px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
      />
    </div>
  );
}

export default FilterBar;
