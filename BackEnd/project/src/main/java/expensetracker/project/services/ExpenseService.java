package expensetracker.project.services;

import expensetracker.project.models.AddExpenseRequest;
import expensetracker.project.models.Expense;
import expensetracker.project.repositories.ExpenseDAORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class ExpenseService {

    ExpenseDAORepository expenseDAORepository;

    @Autowired
    public ExpenseService(ExpenseDAORepository expenseDAORepository) {
        this.expenseDAORepository = expenseDAORepository;
    }

    public Page<Expense> getExpensesSortedByOldest(String category, Pageable pageable) {
        if (category != null) {
            return expenseDAORepository.findByCategoryOrderByDateAsc(category, pageable);
        }
        return expenseDAORepository.findAllByOrderByDateAsc(pageable);
    }

    public Page<Expense> getExpensesSortedByLatest(String category, Pageable pageable) {
        if (category != null) {
            return expenseDAORepository.findByCategoryOrderByDateDesc(category, pageable);
        }
        return expenseDAORepository.findAllByOrderByDateDesc(pageable);
    }

    public void saveExpense(AddExpenseRequest addExpenseRequest) {
        Expense expense = new Expense();
        expense.setAmount(addExpenseRequest.getAmount());
        expense.setDate(addExpenseRequest.getDate());
        expense.setCategory(addExpenseRequest.getCategory());
        expenseDAORepository.save(expense);
    }

    public String getTotalExpenses() {
        return expenseDAORepository.getSumOfAmount().toString();
    }

    public String getTopCategory() {
        return expenseDAORepository.findCategoryWithHighestSum();
    }

    public String getThisMonthExpenses() {
        return expenseDAORepository.getSumOfAmountForCurrentMonth().toString();
    }

    public String getExpenseTrend(Date thirtyDaysAgo, Date sixtyDaysAgo) {
        return Float.toString((1 - expenseDAORepository.getSumOfAmountForLastThirtyDays(thirtyDaysAgo) / expenseDAORepository.getSumOfAmountForLastSixtyDaysToLastThirtyDays(thirtyDaysAgo, sixtyDaysAgo)*100));
    }

    public Map<String, String> getTotalAmountByCategory(){
        Map<String, String> result = new HashMap<>();
        for(var r : expenseDAORepository.getTotalAmountByCategory()){
            result.put((String) r[0], Double.toString( (Double) r[1]));
        }
        return result;
    }

    public Map<String, String> getTotalAmountByMonth(){
        Map<String, String> result = new HashMap<>();
        for( var r : expenseDAORepository.getSumOfAmountByMonth()){
            result.put(r[0] + " " + r[1], Double.toString((Double) r[2]));
        }
        return result;
    }

    public Map<String, String> getTotalAmountByYear(){
        Map<String, String> result = new HashMap<>();
        for(var r : expenseDAORepository.getSumOfAmountByYear()){
            result.put(r[0] + "", Double.toString((Double) r[1]));
        }
        return result;
    }

    public Map<String, String> getExpensesSortedByLatestLimitFive() {
        Map<String, String> recentExpenses = new HashMap<>();
        for(var r : expenseDAORepository.getExpensesSortedByLatestLimitFive()){
            recentExpenses.put(r[0] + "", Double.toString((Double) r[1]));
        }
        return recentExpenses;
    }
}
