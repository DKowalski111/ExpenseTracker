package expensetracker.project.controllers;

import expensetracker.project.models.AddExpenseRequest;
import expensetracker.project.models.Expense;
import expensetracker.project.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/expenses")
public class ExpenseController {
    private ExpenseService expenseService;

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("/dashboard")
    public Map<String, Map<String, String>> getDashboard(){
        Map<String, Map<String, String>> result = new HashMap<>();
        Map<String, String> topInformation = new HashMap<>();
        topInformation.put("total expenses", expenseService.getTotalExpenses());
        topInformation.put("top category", expenseService.getTopCategory());
        result.put("top information", topInformation);

        Map<String, String> categoriesAmount = new HashMap<>();
        result.put("categories amount", expenseService.getTotalAmountByCategory());

        Map<String, String> recentExpenses = new HashMap<>();
        result.put("recent expenses", expenseService.getExpensesSortedByLatestLimitFive());

        return result;
    }

    @GetMapping("/search")
    public Page<Expense> searchExpenses(
            @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "sortBy", defaultValue = "latest") String sortBy,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "pageSize", defaultValue = "20") int pageSize) {

        PageRequest pageRequest = PageRequest.of(page, pageSize);

        if (Objects.equals(sortBy.toLowerCase(), "oldest")) {
            return expenseService.getExpensesSortedByOldest(category, pageRequest);
        }

        return expenseService.getExpensesSortedByLatest(category, pageRequest);
    }

    @PostMapping("/add/expense")
    public ResponseEntity<String> addExpense(@RequestBody AddExpenseRequest addExpenseRequest) {
        try {
            expenseService.saveExpense(addExpenseRequest);
            return new ResponseEntity<>("Expense added successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add expense", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/analytics")
    public Map<String, Map<String, String>> getAnalytics(){
        Map<String, Map<String, String>> analytics = new HashMap<>();
        Map<String, String> topInformations = new HashMap<>();
        topInformations.put("total expenses", expenseService.getTotalExpenses());
        topInformations.put("top category", expenseService.getTopCategory());
        topInformations.put("this month expenses", expenseService.getThisMonthExpenses());
        Date thirtyDaysAgo = Date.valueOf(LocalDate.now().minusDays(30));
        Date sixtyDaysAgo = Date.valueOf(LocalDate.now().minusDays(60));
        topInformations.put("month trend", expenseService.getExpenseTrend(thirtyDaysAgo, sixtyDaysAgo));
        analytics.put("top informations", topInformations);
        analytics.put("categories amount", expenseService.getTotalAmountByCategory());
        analytics.put("monthly spending", expenseService.getTotalAmountByMonth());
        analytics.put("yearly spending", expenseService.getTotalAmountByYear());



        return analytics;
    }
}
