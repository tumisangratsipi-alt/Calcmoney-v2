import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FinanceState {
    annualSalary: number;
    currentAge: number;
    retirementAge: number;
    monthlyHousing: number;

    // Setters
    setAnnualSalary: (val: number) => void;
    setCurrentAge: (val: number) => void;
    setRetirementAge: (val: number) => void;
    setMonthlyHousing: (val: number) => void;
}

export const useFinanceStore = create<FinanceState>()(
    persist(
        (set) => ({
            annualSalary: 120000,
            currentAge: 30,
            retirementAge: 60,
            monthlyHousing: 2500,

            setAnnualSalary: (val: number) => set({ annualSalary: val }),
            setCurrentAge: (val: number) => set({ currentAge: val }),
            setRetirementAge: (val: number) => set({ retirementAge: val }),
            setMonthlyHousing: (val: number) => set({ monthlyHousing: val }),
        }),
        {
            name: 'calcmoney-finance-storage', // unique name for localStorage key
        }
    )
);
