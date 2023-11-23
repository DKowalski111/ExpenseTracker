package expensetracker.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import expensetracker.project.models.Expense;
import expensetracker.project.repositories.ExpenseDAORepository;

import java.util.List;

@Service
@Transactional
public class ExpenseService {
    ExpenseDAORepository expenseDAORepository;

    @Autowired
    public ExpenseService(ExpenseDAORepository expenseDAORepository) {
        this.expenseDAORepository = expenseDAORepository;
    }

    public List<Expense> getExpensesSortedByOldest(String category) {
        if(category != null){
            return expenseDAORepository.findByCategoryOrderByDateAsc(category);
        }
        return expenseDAORepository.findAllByOrderByDateAsc();
    }

    public List<Expense> getExpensesSortedByLatest(String category) {
        if(category != null){
            return expenseDAORepository.findByCategoryOrderByDateDesc(category);
        }
        return expenseDAORepository.findAllByOrderByDateDesc();
    }
}
