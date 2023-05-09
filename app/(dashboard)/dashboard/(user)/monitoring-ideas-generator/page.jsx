'use client';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';

// Image import
import img from '../../../../../images/dashboard/user/monitor/monitor.svg'

// Icons import
import { FaTrash } from 'react-icons/fa';
import { RiTodoLine } from 'react-icons/ri';
import { BsPrinter } from 'react-icons/bs';

export default function Page() {
    const [next, setNext] = useState(true)
    const [bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)
    const [underline, setUnderline] = useState(false)
    const [worktitle, setWorktitle] = useState('');
    const [fontsize, setFontsize] = useState(50)
    const [fontsize2, setFontsize2] = useState(50)

    // For input
    const [inputs, setInputs] = useState(['', '']); // set initial state with two inputs

    console.log(inputs[0]);
    // for handel Input
    const handleAddInput = () => {
        setInputs([...inputs, '']); // add a new empty input to the array
    }

    //   handel input change
    const handleInputChange = (event, index) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs); // update the input value at the specified index
    }

    // delete input
    const handleDeleteInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs); // remove the input at the specified index
    }

    // form submit value
    const handelSubmit = (event) => {
        event.preventDefault();
        const goal = event.target.goal.value;
        const title = event.target.title.value;
        const font = event.target.font.value;
        const color = event.target.color.value;
        const font2 = event.target.font2.value;
        const color2 = event.target.color2.value;

        // input value
        const name = inputs[0]
        const date = inputs[1]
        const orthervalue = inputs.slice(2)

        console.log(goal, title, font, color, fontsize, inputs, name, date, orthervalue, font2, color2);
    }

    return <div className=" min-h-screen  bg-[#F2F2F2]  sm:px-10 px-2 pt-5 lg:flex items-center gap-10">


        {
            next && <div className=' flex flex-col items-center  lg:w-2/6   mb-10 transition-all duration-200 ease-out'>
                <Image src={img} alt="Picture of the author" />
                <h1 className=' text-[#616161] font-medium text-2xl mt-5 mb-3'>Progress Monitoring Ideas Generator</h1>
                <p className=' text-[#878787] w-9/12 mx-auto'>1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            </div>
        }

        <div className={` ${next ? 'lg:w-4/6 w-full' : 'w-full'} bg-white  mb-10  py-12 px-7 rounded-3xl`}>
            <ol class="sm:flex items-center justify-center hidden  ">
                <div className=' flex flex-col items-start justify-center'>
                    <li class={`flex  items-center text-blue-600 after:content-[''] after:w-10 after:h-1 after:border-b after:border-[#A9F8FD] after:border-4  after:rounded-l-full`}>
                        <span class={`flex text-xl text-[#555555] font-medium items-center justify-center w-10 h-10 bg-[#A9F8FD]  rounded-full lg:h-12 lg:w-12  shrink-0`}>
                            1
                        </span>
                    </li>
                    <h1 className=' text-[#A9F8FD] font-medium'>Create</h1>
                </div>
                <div className=' flex flex-col items-end '>
                    <li class={`flex  items-center before:content-[''] before:w-10 before:h-1 before:border-b  before:border-4 before:inline-block before:rounded-r-full ${next ? 'before:border-[#555555]' : ' before:border-[#A9F8FD]'} `}>
                        <span class={`flex text-xl items-center justify-center rounded-full w-10 h-10  lg:h-12 lg:w-12  shrink-0 ${next ? ' bg-transparent border border-[#555555] ' : 'bg-[#A9F8FD]'}`}>
                            2
                        </span>
                    </li>
                    <h1 className={` font-medium ${next ? 'text-[#555555]' : 'text-[#A9F8FD]'} `}>Result</h1>
                </div>
            </ol>

            {
                next ? <form onSubmit={handelSubmit}>
                    <div>
                        <label className=' text-[#5F5F5F] text-xl font-medium ' htmlFor="goal">Goal</label>
                        <select id="goal" name='goal' class="bg-[#F5F5F5] border border-gray-300 text-gray-900 mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  ">
                            <option selected value="CA">Select Goal</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div className=' mt-4'>
                        <h1 className=' text-[#5F5F5F] text-xl font-medium mb-4'>Worksheet Header</h1>
                        <div>
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-[#525252]">Worksheet Title</label>
                            </div>
                        </div>
                        <div className=' bg-[#F5F5F5] rounded-lg'>
                            <div className=' flex items-center gap-7 text-lg px-8 border-b border-b-gray-200 pt-2 pb-1 font-medium'>
                                <button onClick={() => setBold(!bold)} className={`font-bold ${bold ? 'text-black' : ' text-gray-500'}`}>B</button>
                                <button onClick={() => setItalic(!italic)} className={`italic ${italic ? 'text-black' : ' text-gray-500'}`}>i</button>
                                <button onClick={() => setUnderline(!underline)} className={`underline ${underline ? 'text-black' : ' text-gray-500'}`}>U</button>
                            </div>
                            <input onChange={(e) => setWorktitle(e.target.value)} value={worktitle} type="text" name='title' id='title' placeholder='Worksheet Title' className={`${bold && 'font-bold'} ${italic && 'italic'} ${underline && 'underline'} px-8 py-4 bg-transparent w-full placeholder:text-black `} />

                        </div>
                    </div>

                    <div className=' mt-4 flex items-center gap-5'>
                        <div className=' w-full'>
                            <label className=' text-[#5F5F5F] ' htmlFor="font">Font Type</label>
                            <select id="font" name='font' class="bg-[#F5F5F5] border border-gray-300 text-gray-900 mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 py-2  ">
                                <option selected value="CA">Nonito</option>
                                <option value="FR">Serif</option>
                                <option value="DE">Mono</option>
                            </select>
                        </div>
                        <div className=' w-40'>
                            <label htmlFor='color' className=' text-[#5F5F5F] '>Font Color</label>
                            <input name='color' id='color' type="color" className=' w-full h-10' />
                        </div>
                    </div>

                    <div className=' mt-6 '>
                        <label for="customRange1" className="flex items-center justify-between">
                            <p>Font Size</p>
                            <p>100</p>
                        </label>
                        <div>
                            <input type="range" min="0" max="100" value={fontsize} onChange={(e) => setFontsize(e.target.value)} />
                        </div>
                    </div>



                    <div className=' flex items-center justify-between mt-4 mb-4'>
                        <div class="flex items-center ">
                            <input checked id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded " />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-[#1f1f1f]">Student Info</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span class=" text-sm font-medium text-[#1f1f1f]">Every Page</span>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="w-10 h-[20px] bg-[#525252] peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.8px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>



                    <div>
                        <div className="flex items-center gap-7">
                            <input
                                type="text"
                                value={inputs[0]}
                                onChange={(event) => handleInputChange(event, 0)}
                                placeholder="Name"
                                className="bg-[#F5F5F5] w-full p-3 mt-2 rounded-lg outline-none "
                            />
                            <button
                                disabled
                                className="text-2xl text-[#FF6161] cursor-not-allowed"
                            >
                                <FaTrash />
                            </button>
                        </div>
                        <div className="flex items-center gap-7">
                            <input
                                type="text"
                                value={inputs[1]}
                                onChange={(event) => handleInputChange(event, 1)}
                                placeholder="Date"
                                className="bg-[#F5F5F5] w-full p-3 mt-2 rounded-lg outline-none "
                            />
                            <button
                                disabled
                                className="text-2xl text-[#FF6161] cursor-not-allowed"
                            >
                                <FaTrash />
                            </button>
                        </div>
                        {inputs.slice(2).map((input, index) => (
                            <div key={index + 2} className="flex items-center gap-7">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(event) => handleInputChange(event, index + 2)}
                                    placeholder={`Input ${index + 3}`}
                                    className="bg-[#F5F5F5] w-full p-3 mt-2 rounded-lg outline-none "
                                />
                                <button
                                    onClick={() => handleDeleteInput(index + 2)}
                                    className="text-2xl text-[#FF6161]"
                                ><FaTrash />
                                </button>
                            </div>
                        ))}
                        <button onClick={handleAddInput} className=' py-3 w-full rounded-lg bg-[#DFFCFF] text-[#555555]  mt-8 font-medium'>Add New Field</button>
                    </div>


                    <div className=' mt-4 flex items-center gap-5'>
                        <div className=' w-full'>
                            <label className=' text-[#5F5F5F] ' htmlFor="font2">Font Type</label>
                            <select id="font2" name='font2' class="bg-[#F5F5F5] border border-gray-300 text-gray-900 mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 py-2  ">
                                <option selected value="CA">Select  area of need</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div className=' w-40'>
                            <label className=' text-[#5F5F5F] ' htmlFor="color">Font Color</label>
                            <input name='color2' id='color' type="color" className=' w-full h-10' />
                        </div>
                    </div>

                    <div className=' mt-6 mb-16'>
                        <label for="customRange1" className="flex items-center justify-between">
                            <p>Font Size</p>
                            <p>40</p>
                        </label>
                        <div>
                            <input type="range" min="0" max="100" value={fontsize2} onChange={(e) => setFontsize2(e.target.value)} />
                        </div>
                    </div>


                    <button className=' py-3 w-full rounded-lg border border-[#A9F8FD] text-[#555555]  mt-8 font-medium flex items-center justify-center gap-2'><RiTodoLine />Add</button>



                    <button type='submit'
                        // onClick={() => setNext(!next)}
                        className=' py-3 w-full rounded-lg bg-[#A9F8FD] text-[#555555]  mt-8 font-medium flex items-center justify-center gap-2'><BsPrinter />Make Printable</button>
                </form> : <div className=' flex flex-col items-center'>

                    <div className='h-[1px] w-full bg-[#C6C6C6] mt-8'></div>
                    <div>
                        <h1 className=' text-[#2B2B2B] text-2xl text-center font-medium mt-10'>Worksheet Title</h1>
                    </div>

                    <div className=' flex flex-col items-start w-full text-xl'>
                        <div className=' border-b border-b-gray-400'>
                            <label htmlFor="name">Name :</label>
                            <input type="text" />
                        </div>
                        <div className=' border-b border-b-gray-400 mt-3'>
                            <label htmlFor="name">Date :</label>
                            <input type="text" />
                        </div>
                    </div>

                </div>
            }
        </div>
    </div>;
}
