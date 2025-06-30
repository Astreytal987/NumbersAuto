import { create } from 'zustand'

const useStore = create((set) => ({
    autoNumbers: [],
    autoSearch: {
        series1: '',
        number: '',
        series2: '',
        region: ''
    },
    updateAutoSearch: (newSearch) => set({ autoSearch: newSearch }),
    updateAutoNumbers: (newNumbers) => set({ autoNumbers: newNumbers }),
}))

export default useStore