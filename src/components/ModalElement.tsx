import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useModalStore } from '../store/modalStore'

export const ModalElement = () => {
	const { closeModal, isModalOpen } = useModalStore()
	const { t } = useTranslation()
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
				className={`w-7xl h-[2691px]  bg-white rounded-2xl shadow-2xl py-10 px-[34px] mt-20 mb-20 
                 ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
			>
				<div className="flex justify-between items-center">
					<h1 className="text-center  flex-1 mb-[25px]">{t('Filter')}</h1>
					<button
						type="button"
						onClick={closeModal}
						className="text-2xl font-bold hover:text-gray-700"
					>
						×
					</button>
				</div>
				<form>
					<fieldset>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">{t('Preliminary filter')}</legend>

							<div className="grid grid-cols-3 gap-4 justify-start">
								<label htmlFor="Distance to the center 1 km">
									<input
										type="checkbox"
										id="Distance to the center 1 km"
										className="mr-[18px]"
									/>
									{t('Distance to the center 1 km')}
								</label>

								<label htmlFor="Guest rating 9 +">
									<input
										id="Guest rating 9 +"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Guest rating 9+')}
								</label>

								<label htmlFor="Hotels">
									<input
										type="checkbox"
										id="Hotels"
										className="mr-[18px]"
									/>
									{t('Hotels')}
								</label>

								<label htmlFor="Distance to the center 3 km">
									<input
										type="checkbox"
										id="Distance to the center 3 km"
										className="mr-[18px]"
									/>
									{t('Distance to the center 3 km')}
								</label>

								<label htmlFor="5 stars">
									<input
										type="checkbox"
										id="5 stars"
										className="mr-[18px]"
									/>
									{t('5 stars')}
								</label>

								<label htmlFor="Breakfast is included">
									<input
										type="checkbox"
										id="Breakfast is included"
										className="mr-[18px]"
									/>
									{t('Breakfast is included')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4]  py-8">
							<legend className="mb-6">{t('Popular filters')}</legend>
							<div className="grid grid-cols-3 gap-4  justify-start">
								<label htmlFor="5 stars ">
									<input
										type="checkbox"
										id="5 stars"
										className="mr-[18px]"
									/>
									{t('5 stars ')}
								</label>
								<label htmlFor="Breakfast is included">
									<input
										type="checkbox"
										id="Breakfast is included"
										className="mr-[18px]"
									/>
									{t('Breakfast is included')}
								</label>
								<label htmlFor="Free booking">
									<input
										id="Free booking"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Free booking')}
								</label>
								<label htmlFor="4 stars ">
									<input
										type="checkbox"
										id="4 stars "
										className="mr-[18px]"
									/>
									{t(' 4 stars ')}
								</label>
								<label htmlFor="Distance to the center 3 km">
									<input
										id="Distance to the center 3 km"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Distance to the center 3 km')}
								</label>
								<label htmlFor="Guest rating 8+">
									<input
										type="checkbox"
										id="Guest rating 8+"
										className="mr-[18px]"
									/>
									{t('Guest rating 8+')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">
								{t('Amenities of the accommodation facility')}
							</legend>
							<div className="grid grid-cols-3 gap-4 justify-start">
								<label htmlFor="Transfer to/from the hotel">
									<input
										id="Transfer to/from the hotel"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Transfer to/from the hotel')}
								</label>
								<label htmlFor="Breakfast included">
									<input
										id="Breakfast included"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Breakfast included')}
								</label>
								<label htmlFor="Smoking area">
									<input
										id="Smoking area"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Smoking area')}
								</label>
								<label htmlFor="Round-the-clock reception">
									<input
										id="Round-the-clock reception"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Round-the-clock reception')}
								</label>
								<label htmlFor="Restaurant">
									<input
										id="Restaurant"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Restaurant')}
								</label>
								<label htmlFor="Children playground">
									<input
										id="Children playground"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t("Children's playground")}
								</label>
								<label htmlFor="Early check-in">
									<input
										id="Early check-in"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Early check-in')}
								</label>
								<label htmlFor="Swimming pool">
									<input
										id="Swimming pool"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Swimming pool')}
								</label>
								<label htmlFor="Internet">
									<input
										id="Internet"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Internet')}
								</label>
								<label htmlFor="Late check-in">
									<input
										id="Late check-in"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Late check-in')}
								</label>
								<label htmlFor="Spa center/sauna">
									<input
										id="Spa center/sauna"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Spa center/sauna')}
								</label>
								<label htmlFor="Security">
									<input
										id="Security"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Security')}
								</label>
								<label htmlFor="Pets are allowed">
									<input
										id="Pets are allowed"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Pets are allowed')}
								</label>
								<label htmlFor="Gym/fitness room">
									<input
										id="Gym/fitness room"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Gym/fitness room')}
								</label>
								<label htmlFor="Lift">
									<input
										id="Lift"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Lift')}
								</label>
								<label htmlFor="Parking">
									<input
										id="Parking"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Parking')}
								</label>
								<label htmlFor="Conference rooms">
									<input
										id="Conference rooms"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Conference rooms')}
								</label>
								<label htmlFor="Eco-responsibility">
									<input
										id="Eco-responsibility"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Eco-responsibility')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">
								{t('Amenities for people with disabilities')}
							</legend>
							<div className="grid grid-cols-3 gap-4  justify-start">
								<label htmlFor="Entrance without steps">
									<input
										id="Entrance without steps"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Entrance without steps')}
								</label>
								<label htmlFor="Parking ">
									<input
										id="Parking"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Parking ')}
								</label>
								<label htmlFor="Lift">
									<input
										type="checkbox"
										id="Lift"
										className="mr-[18px]"
									/>
									{t('Lift')}
								</label>
								<label htmlFor="Entrance 81 cm wide">
									<input
										id="Entrance 81 cm wide"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Entrance 81 cm wide')}
								</label>
								<label htmlFor="Availability of a ramp">
									<input
										id="Availability of a ramp"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Availability of a ramp')}
								</label>
								<label htmlFor="Handrails">
									<input
										id="Handrails"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Handrails')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">{t('Room facilities')}</legend>
							<div className="grid grid-cols-3 gap-4 justify-start">
								<label htmlFor="Bath">
									<input
										id="Bath"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Bath')}
								</label>
								<label htmlFor="Kitchen">
									<input
										id="Kitchen"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Kitchen')}
								</label>
								<label htmlFor="Underfloor heating">
									<input
										id="Underfloor heating"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Underfloor heating')}
								</label>
								<label htmlFor="Shower">
									<input
										id="Shower"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Shower')}
								</label>
								<label htmlFor="Air Conditioning">
									<input
										id="Air Conditioning"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Air Conditioning')}
								</label>
								<label htmlFor="Pets allowed">
									<input
										id="Pets allowed"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Pets allowed')}
								</label>
								<label htmlFor="Coffee machine">
									<input
										id="Coffee machine"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Coffee machine')}
								</label>
								<label htmlFor="Iron">
									<input
										id="Iron"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Iron')}
								</label>
								<label htmlFor="Baby bed">
									<input
										id="Baby bed"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Baby bed')}
								</label>
								<label htmlFor="Kettle">
									<input
										id="Kettle"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Kettle')}
								</label>
								<label htmlFor="Internet">
									<input
										id="Internet"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Internet')}
								</label>
								<label htmlFor="Balcony">
									<input
										id="Balcony"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Balcony')}
								</label>
								<label htmlFor="Fridge">
									<input
										id="Fridge"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Fridge')}
								</label>
								<label htmlFor="Workplace">
									<input
										id="Workplace"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Workplace')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">
								{t('Room facilities for people with disabilities')}
							</legend>
							<div className="grid grid-cols-3 gap-4  justify-start">
								<label htmlFor="Main door entrance width 81 cm">
									<input
										id="Main door entrance width 81 cm"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Main door entrance width 81 cm')}
								</label>
								<label htmlFor="Handrail in the shower">
									<input
										id="Handrail in the shower"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t(' Handrail in the shower')}
								</label>
								<label htmlFor="High toilet bowl">
									<input
										id="High toilet bowl"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('High toilet bowl')}
								</label>
								<label htmlFor="Interior door width 81 cm">
									<input
										id="Interior door width 81 cm"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Interior door width 81 cm')}
								</label>
								<label htmlFor="Bath/shower chair">
									<input
										id="Bath/shower chair"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Bath/shower chair')}
								</label>
								<label htmlFor="Instructions in Braille">
									<input
										id="Instructions in Braille"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Instructions in Braille')}
								</label>
								<label htmlFor="Absence of steps">
									<input
										id="Absence of steps"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Absence of steps')}
								</label>
								<label htmlFor="Barrier-free shower">
									<input
										id="Barrier-free shower"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Barrier-free shower')}
								</label>
								<label htmlFor="Emergency cord in the bathroom">
									<input
										id="Emergency cord in the bathroom"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Emergency cord in the bathroom')}
								</label>
								<label htmlFor="Handrail near the toilet">
									<input
										id="Handrail near the toilet"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Handrail near the toilet')}
								</label>
								<label htmlFor="Low washbasin">
									<input
										id="Low washbasin"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Low washbasin')}
								</label>
								<label htmlFor="Emergency cord by the bedside">
									<input
										id="Emergency cord by the bedside"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Emergency cord by the bedside')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">{t('Nutrition')}</legend>
							<div className="grid grid-cols-3 gap-4  justify-start">
								<label htmlFor="Room without meals">
									<input
										id="Room without meals"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Room without meals')}
								</label>
								<label htmlFor="Breakfast and dinner">
									<input
										id="Breakfast and dinner"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Breakfast and dinner')}
								</label>
								<label htmlFor="All inclusive">
									<input
										id="All inclusive"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('All inclusive')}
								</label>
								<label htmlFor="Breakfast included">
									<input
										id="Breakfast included"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Breakfast included')}
								</label>
								<label htmlFor="Breakfast, lunch, dinner">
									<input
										id="Breakfast, lunch, dinner"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Breakfast, lunch, dinner')}
								</label>
								<label htmlFor="Ultra all inclusive">
									<input
										id="Ultra all inclusive"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Ultra all inclusive')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">
								{t('Reservation cancellation policy')}
							</legend>
							<div className="grid grid-cols-2 gap-4  justify-start">
								<label htmlFor="Free cancellation before check-in">
									<input
										id="Free cancellation before check-in"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Free cancellation before check-in')}
								</label>
								<label htmlFor="Free cancellation one week before check-in">
									<input
										id="Free cancellation one week before check-in"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Free cancellation one week before check-in')}
								</label>
								<label htmlFor="Free cancellation up to 3 days before check-in">
									<input
										id="Free cancellation up to 3 days before check-in"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Free cancellation up to 3 days before check-in')}
								</label>
								<label htmlFor="No possibility of cancellation">
									<input
										id="No possibility of cancellation"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('No possibility of cancellation')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">{t('Prepayment')}</legend>
							<div className="grid grid-cols-2 gap-4  justify-start">
								<label htmlFor="Booking without a credit card">
									<input
										id="Booking without a credit card"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Booking without a credit card')}
								</label>
								<label htmlFor="Partial prepayment">
									<input
										id="Partial prepayment"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Partial prepayment')}
								</label>
								<label htmlFor="Booking without prepayment">
									<input
										id="Booking without prepayment"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Booking without prepayment')}
								</label>
								<label htmlFor="Full prepayment">
									<input
										id="Full prepayment"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Full prepayment')}
								</label>
							</div>
						</div>
						<div className=" border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">{t('Form of payment')}</legend>
							<div className="grid grid-cols-1 gap-4  justify-start">
								<label htmlFor="Payment in cash">
									<input
										id="Payment in cash"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Payment in cash')}
								</label>
								<label htmlFor="Payment by card">
									<input
										id="Payment by card"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Payment by card')}
								</label>
							</div>
						</div>
						<div className="border-t-2 border-[#B4B4B4] py-8">
							<legend className="mb-6">
								{t('Special offers and discounts')}
							</legend>
							<div className="grid grid-cols-3 gap-4  justify-start">
								<label htmlFor="Discounts of 50%">
									<input
										id="Discounts of 50%"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Discounts of 50%')}
								</label>
								<label htmlFor="">
									<input
										id="Hot offers"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Hot offers')}
								</label>
								<label htmlFor="Cheap options for relocation">
									<input
										id="Cheap options for relocation"
										type="checkbox"
										className="mr-[18px]"
									/>
									{t('Cheap options for relocation')}
								</label>
							</div>
						</div>
					</fieldset>
				</form>
				<div className="border-t-2 border-[#B4B4B4] py-8 flex justify-center items-center ">
					<button
						type="submit"
						onClick={closeModal}
						className=" flex   justify-center w-[184px] h-16  bg-[#FF5F00] hover:bg-[#FF9E59] border-transparent rounded-2xl px-2 py-4 text-white  "
					>
						{t('Apply')}
					</button>
					<button className=" font-medium text-[#078691] border-b-2 ">
						{t('Clear all parameters')}
					</button>
				</div>
			</div>
		</div>
	)
}
