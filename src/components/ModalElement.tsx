import { useEffect, useState } from 'react'
import { useModalStore } from '@/store/modalStore'
import { FilterForm } from './FilterForm'



export const ModalElement = () => {
	const { closeModal, isModalOpen } = useModalStore()
	const [visible, setIsVisible] = useState(isModalOpen)
	const [animate, setanimAte] = useState(false)

	useEffect(() => {
		if (isModalOpen) {
			setIsVisible(true)
			requestAnimationFrame(() => setanimAte(true))
		} else {
			setanimAte(false)
			const timer = setTimeout(() => setIsVisible(false), 300)
			return () => clearTimeout(timer)
		}
	}, [isModalOpen])

	if (!visible) {
		return null
	}

	return (
		<div
			className={`fixed inset-0 bg-black/30 backdrop-blur-[25px] flex justify-center z-50 overflow-y-auto transition-opacity duration-300
        ${animate ? 'bg-black/50 opacity-100' : 'opacity-0'}`}
		>
			<div
				className={`relative  w-7xl h-[2650px]  bg-white rounded-2xl shadow-2xl py-10 px-[34px] mt-20 mb-20 
                 ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
			>
				<button  onClick={() => closeModal()} className='absolute top-[54px] right-[35px] w-6 h-6'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>					
				</button>
				<FilterForm />
			</div>
		</div>
	)
}

