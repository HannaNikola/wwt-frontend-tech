import { useModalStore} from '@/store/modalStore'
import { useTranslation } from 'react-i18next'
import { ModalElement } from './ModalElement'


export const Home = () => {
	const { openModal } = useModalStore()
	const { t } = useTranslation()

	return (
		<div className=" h-dvh ">
			<button
				type="button"
				onClick={openModal}
				className=" flex justify-center w-[184px] h-16 mt-40 bg-[#FF5F00] hover:bg-[#FF9E59] border-transparent rounded-2xl px-2 py-4 text-white  "
			>
				{t('Filter')}
			</button>
			<div></div>
			<ModalElement />
		</div>
	)
}



