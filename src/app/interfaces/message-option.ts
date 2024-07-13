import { CasteOption } from "./caste-option";
import { SubCasteOption } from "./sub-caste-option";
import { SubOccupationOption } from "./sub-occupation-option";
import { UserOption } from "./user-option";

export interface MessageOption {
    genders: UserOption[],
    createdby: UserOption[],
    familystatus: UserOption[],
    familyvalue: UserOption[],
    familytype: UserOption[],
    maritialstatus: UserOption[],
    phystatus: UserOption[],
    occupations: UserOption[],
    counteries: UserOption[],
    religions: UserOption[],
    heights: UserOption[],
    educations: UserOption[],
    diettype: UserOption[],
    incomes: UserOption[],
    mothertongue: UserOption[],
    caste: CasteOption[],
    subcaste: SubCasteOption[],
    suboccupation: SubOccupationOption[]
}
