import React from 'react';
import { NativeSyntheticEvent } from 'react-native';
import type { OnLoadEvent, VisitProposal, VisitProposalError } from './types';
export interface Props {
    url: string;
    onVisitProposal: (proposal: NativeSyntheticEvent<VisitProposal>) => void;
    onLoad?: (proposal: NativeSyntheticEvent<OnLoadEvent>) => void;
    onVisitError?: (proposal: NativeSyntheticEvent<VisitProposalError>) => void;
}
declare const VisitableView: React.FC<Props>;
export default VisitableView;
//# sourceMappingURL=VisitableView.d.ts.map