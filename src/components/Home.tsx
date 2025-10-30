import { useTranslation } from 'react-i18next'
import { queryClient } from '@/query'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'
import { useModalStore } from '@/store/modalStore'
import filterData from '../shared/temp/filterData.json'
import { ModalElement } from './ModalElement'

export const Home = () => {
	const { openModal } = useModalStore()
	const { t } = useTranslation()

	const filters = queryClient.getQueryData<SearchRequestFilter>(['filters'])

	return (
		<div className="h-dvh justify-center">
			<button
				type="button"
				onClick={openModal}
				className="flex justify-center items-center mr-5 w-[184px] h-16 mt-40 bg-[#FF5F00] hover:bg-[#FF9E59] border-transparent rounded-2xl px-2 py-4 text-white cursor-pointer"
			>
				{t('Filter')}
			</button>

			{filters && filters.length > 0 && (
				<div className="mt-14 justify-center">
					<div>
						{filters.map(
							filter =>
								filter.optionsIds.length > 0 && (
									<div
										key={filter.id}
										className="border border-[#FF5F00] p-4 rounded mt-5"
									>
										<h2 className="mb-4">{t('Your results')}</h2>
										<ul>
											{filter.optionsIds.map(optId => {
												const fullFilter = filterData.filterItems.find(
													f => f.id === filter.id
												)
												const option = fullFilter?.options?.find(
													o => o.id.toLowerCase() === optId.toLowerCase()
												)

												return (
													<li
														key={optId}
														className="bg-[#FF5F0033] rounded mb-4 p-2"
													>
														<p>{option?.name}</p>
														<p>{option?.description}</p>
													</li>
												)
											})}
										</ul>
									</div>
								)
						)}
					</div>
				</div>
			)}

			{filters && filters.length === 0 && (
				<p className="mt-10">{t('No matches...')}</p>
			)}

			<ModalElement />
		</div>
	)
}
