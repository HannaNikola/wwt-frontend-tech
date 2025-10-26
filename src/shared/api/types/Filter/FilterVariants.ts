import { FilterBase, FilterChooseOption, FilterType } from './index'

export interface FilterChoose extends FilterBase {
	type: FilterType.OPTION
	allowAll?: boolean
	options: FilterChooseOption[]
}
