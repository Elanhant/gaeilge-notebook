export interface RouterState {
    currentPath: string;
}

export interface EnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}

export interface StoreState {
    enthusiasm: EnthusiasmState;
    router: RouterState
}
