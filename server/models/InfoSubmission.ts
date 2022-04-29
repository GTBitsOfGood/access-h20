import { documentQA } from './DocumentQuestion'
import { eligibilityQA } from './EligibilityQuestion'
import { otherQA } from './OtherQuestion'

export interface Info {
  accountId: string
  eligibilityQuestions: eligibilityQA[]
  documents: documentQA[]
  otherQuestions: otherQA[]
}
