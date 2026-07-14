import { create } from "zustand"; 
import { persist } from "zustand/middleware"; 
const useExpenseStore = create( 
  persist( 
    (set) => ({ 
      users: [ 
        { 
          id: 1, 
          name: "Kimberly", 
          transactions: [ 
            { 
              id: 1, 
              text: "Salary", 
              amount: 500, 
            }, 
            { 
              id: 2, 
              text: "Fees", 
              amount: 300, 
            }, 
          ], 
        }, 
        
        { 
          id: 2, 
          name: "John", 
          transactions: [ 
            { 
              id: 3, 
              text: "Food", 
              amount: -50, 
            }, 
            { 
              id: 4, 
              text: "Fuel", 
              amount: -120, 
            }, 
          ], 
        }, 
      ], 
      selectedUserId: 1, 
      
      selectUser: (id) => 
        set({ 
          selectedUserId: id,
         }), 
         addUser: (name) =>
           set((state) => ({ 
            users: [
               ...state.users,
                { id: Date.now(),
                   name,
                    transactions: [],
                   }, 
                  ], 
                })),
                deleteUser: (id) => 
                  set((state) => ({ 
                    users: state.users.filter(
                      (user) => user.id !== id 
                    ), 
                  })), 

               addTransaction: (transaction) =>
  set((state) => {

    console.log("Store received:", transaction);

    return {
      users: state.users.map((user) =>
        user.id === state.selectedUserId
          ? {
              ...user,
              transactions: [
                ...user.transactions,
                transaction,
              ],
            }
          : user
      ),
    };
  }),

  deleteTransaction: (id) =>
  set((state) => ({
    users: state.users.map((user) =>
      user.id === state.selectedUserId
        ? {
            ...user,
            transactions: user.transactions.filter(
              (transaction) => transaction.id !== id
            ),
          }
        : user
    ),
  })),
  
                }), 
                { 
                  name: "expense-storage", 
                } 
              ) 
            ); 
export default useExpenseStore;