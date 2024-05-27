import { Button, Modal, Sidebar, SidebarItem } from 'flowbite-react'
import React from 'react';
<<<<<<< HEAD
import { HiUser, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiAnnotation, HiChartPie, HiOutlineExclamationCircle } from 'react-icons/hi';
=======
import {HiUser, HiArrowSmRight, HiDocumentText} from 'react-icons/hi';
>>>>>>> parent of 3d8cc3c (Create users API routes & show users to admin dashbord & create delete function to admin)
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function DashSidebar() {
    const location = useLocation();
  const [tab, setTab] = useState('');
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { currentUser } = useSelector(state => state.user);
  const [showModal, setShowModal]= useState(false);
=======
  const {currentUser}= useSelector(state => state.user);
>>>>>>> parent of 3d8cc3c (Create users API routes & show users to admin dashbord & create delete function to admin)
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
   
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async() =>{
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  
  };
  return (
    <Sidebar className='w-full md:w-56'>
<<<<<<< HEAD
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>

        {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}

          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item active={tab === 'profile'} icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'} labelColor='dark'>
              profile
            </Sidebar.Item>
          </Link>
=======
        <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>
            <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab=== 'profile'} icon = {HiUser} 
                label ={currentUser.isAdmin ? 'Admin' : 'User'} labelColor='dark'>
                    profile
                </Sidebar.Item>
                </Link>
>>>>>>> parent of 3d8cc3c (Create users API routes & show users to admin dashbord & create delete function to admin)

                {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
<<<<<<< HEAD
          
          {currentUser.isAdmin && (
             <>
             <Link to='/dashboard?tab=users'>
               <Sidebar.Item
                 active={tab === 'users'}
                 icon={HiOutlineUserGroup}
                 as='div'
               >
                 Users
               </Sidebar.Item>
             </Link>
             <Link to='/dashboard?tab=comments'>
               <Sidebar.Item
                 active={tab === 'comments'}
                 icon={HiAnnotation}
                 as='div'
               >
                 Comments
               </Sidebar.Item>
             </Link>
           </>
          )}
         {currentUser.isAdmin && (
            <Link to='/dashboard?tab=adds'>
              <Sidebar.Item
                active={tab === 'adds'}
                icon={HiDocumentText}
                as='div'
              >
                Adds
              </Sidebar.Item>
            </Link>
          )}

          <Sidebar.Item icon={HiArrowSmRight} classname='cursor-pointer' onClick={()=>{
            setShowModal(true)
                  }}>
            
            Sign Out
          </Sidebar.Item>

          <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to Sign Out?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClick={handleSignout}
              >
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
=======



                <Sidebar.Item  icon = {HiArrowSmRight} classname ='cursor-pointer' onClick={handleSignout}>
                    Sign Out
                </Sidebar.Item>
             
            </Sidebar.ItemGroup>
        </Sidebar.Items>
>>>>>>> parent of 3d8cc3c (Create users API routes & show users to admin dashbord & create delete function to admin)
    </Sidebar>

    
  )
}
