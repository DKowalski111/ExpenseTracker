package expensetracker.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import expensetracker.project.models.Expense;
import expensetracker.project.services.ExpenseService;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/expenses")
public class ExpenseController {
    private ExpenseService expenseService;

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("/search")
    public List<Expense> searchExpenses(
            @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "sortBy", defaultValue = "latest") String sortBy){
        if(Objects.equals(sortBy, "oldest")){
            return expenseService.getExpensesSortedByOldest(category);
        }
        return expenseService.getExpensesSortedByLatest(category);
    }
}
