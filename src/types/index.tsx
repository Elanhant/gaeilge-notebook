export interface RouterState {
    currentPath: string;
    currentSearch: string;
}

export interface EnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}

export interface StoreState {
    enthusiasm: EnthusiasmState;
    router: RouterState
}
