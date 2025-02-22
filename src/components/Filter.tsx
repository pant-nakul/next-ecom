"use client";
import React from 'react'

const Filter = () => {
    return (
        <div className="mt-12 flex justify-between">
            <div className="flex flex-wrap gap-6">
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
                    <option value="">Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">DIgital</option>
                </select>
                <input type="text" name="min" placeholder="min price"
                       className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                />
                <input type="text" name="max" placeholder="max price"
                       className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                />
                <select name="size" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
                    <option value="">Size</option>
                    <option value="size">Size</option>
                    <option value="digital">DIgital</option>
                </select>
                <select name="color" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
                    <option value="">Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                </select>
                <select name="category" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
                    <option value="">Category</option>
                    <option value="physical">New Arrival</option>
                    <option value="digital">Popular</option>
                </select>
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
                    <option value="">All Filters</option>
                </select>
            </div>
            <div className="">
                <select name="sort" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white
                        ring-1 ring-gray-400">
                    <option>Sort By</option>
                    <option value="physical">Price (low to high)</option>
                    <option value="physical">Price (high to low)</option>
                    <option value="physical">Newest</option>
                    <option value="digital">Oldest</option>
                </select>
            </div>

        </div>
    )
}
export default Filter
