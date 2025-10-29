import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@/store/filterStore'
import { useModalStore } from '@/store/modalStore'

import { FilterFormValue } from '../shared/temp/FilterFormValue'

export const FilterForm = () => {
	const { t } = useTranslation()
	const { selected, setSelected, clearFilters } = useFilterStore()
	const { closeModal } = useModalStore()
	const [checked, setChecked] = useState<string[]>(selected)

	useEffect(() => {
		setChecked(selected)
	}, [selected])

	const handelChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked: isChecked } = event.target

		setChecked(prev =>
			isChecked ? [...prev, value] : prev.filter(item => item !== value)
		)
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		console.log('выбранные фильтры:', checked)
		setSelected(checked)
		closeModal()
	}

	const handelClear = () => {
		clearFilters()
		setChecked([])
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<h1 className="text-center  flex-1 mb-[25px]">{t('Filter')}</h1>

					{FilterFormValue.map((item, sectionindex) => (
						<div
							key={sectionindex}
							className="border-t-2 border-[#B4B4B4] py-8"
						>
							<legend className="mb-6">{t(item.title)}</legend>
							<div className="grid grid-cols-3 gap-4 justify-start">
								{item.filters.map((filter, index) => (
									<label
										key={index}
										htmlFor="filter"
									>
										<input
											type="checkbox"
											id={`filter-${sectionindex}-${index}`}
											name={filter}
											value={filter}
											checked={checked.includes(filter)}
											onChange={handelChecked}
											className="mr-[18px]"
										/>
										{t(filter)}
									</label>
								))}
							</div>
						</div>
					))}
				</fieldset>
				<div className="border-t-2 border-[#B4B4B4] py-8 flex justify-center items-center ">
					<button
						type="submit"
						className=" flex   justify-center w-[184px] h-16  bg-[#FF5F00] hover:bg-[#FF9E59] border-transparent rounded-2xl px-2 py-4 text-white  "
					>
						{t('Apply')}
					</button>
					<button
						type="button"
						onClick={handelClear}
						className=" font-medium text-[#078691] border-b-2 "
					>
						{t('Clear all parameters')}
					</button>
				</div>
			</form>
		</>
	)
}
