import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { queryClient } from '@/query'
import { FilterChoose, FilterType } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'
import { useFilterStore } from '@/store/filterStore'
import { useModalStore } from '@/store/modalStore'
import filterData from '../shared/temp/filterData.json'
import { FilterFormValue } from '../shared/temp/filterFormValue'



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

		const allFilters = FilterFormValue.flatMap(section => section.filters)
		const selectedFilters = allFilters.filter(f => checked.includes(f.id))
		const normalize = selectedFilters.map(f => f.name.toLowerCase().trim())

		const isFilterChoose = (f: any): f is FilterChoose =>
			f.type === FilterType.OPTION

		const optionFilters = filterData.filterItems.filter(isFilterChoose)

		const matched = optionFilters.filter(filter =>
			normalize.every(ch =>
				filter.options.some(o => {
					const name = o.name.toLowerCase().trim()
					const id = o.id.toLowerCase().trim()
					return (
						name === ch ||
						id === ch ||
						name.includes(ch) ||
						ch.includes(name) ||
						ch.includes(id)
					)
				})
			)
		)

		const searchRequestFilters: SearchRequestFilter = matched.map(f => ({
			id: f.id,
			type: FilterType.OPTION,
			optionsIds: f.options
				.filter(o => {
					const name = o.name.toLowerCase().trim()
					const id = o.id.toLowerCase().trim()
					return normalize.some(
						ch =>
							name === ch ||
							id === ch ||
							name.includes(ch) ||
							ch.includes(name) ||
							id.includes(ch) ||
							ch.includes(id)
					)
				})
				.map(o => o.id)
		}))
		
		
		queryClient.setQueryData(['filters'], searchRequestFilters)
		setSelected(checked)
		closeModal()
	}

	const handelClear = () => {
		clearFilters()
        queryClient.setQueryData(['filters'], []);
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
							<div className="grid grid-cols-3 gap-4 justify-start ">
								{item.filters.map(filter => (
                                    
									<label
										key={filter.id}
										htmlFor={filter.id}
                                        className='flex items-center cursor-pointer'
									>
										<input
											type="checkbox"
											id={filter.id}
											name={filter.name}
											value={filter.id}
											checked={checked.includes(filter.id)}
											onChange={handelChecked}
											className="mr-[18px] w-5 h-5 cursor-pointer"
										/>
										{t(filter.name)}
									</label>
                                    
								))}
							</div>
						</div>
					))}
				</fieldset>
				<div className="border-t-2 border-[#B4B4B4] pt-8 flex justify-center items-center">
					<div className="flex justify-center flex-1">
						<button
							type="submit"
							className=" flex   justify-center w-[184px] h-16  bg-[#FF5F00] hover:bg-[#FF9E59] border-transparent rounded-2xl px-2 py-4 text-white cursor-pointer "
						>
							{t('Apply')}
						</button>
					</div>
					<div className="flex justify-end ">
						<button
							type="button"
							onClick={handelClear}
							className=" flex font-medium text-[#078691] hover:text-[#7E7E7E] border-b-2 cursor-pointer"
						>
							{t('Clear all parameters')}
						</button>
					</div>
				</div>
			</form>
		</>
	)
}
