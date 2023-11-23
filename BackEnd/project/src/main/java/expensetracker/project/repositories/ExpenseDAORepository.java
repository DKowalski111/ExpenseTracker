package expensetracker.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import expensetracker.project.models.Expense;

import java.util.List;

public interface ExpenseDAORepository extends JpaRepository<Expense, Long> {
    List<Expense> findByCategoryOrderByDateAsc(String category);

    List<Expense> findByCategoryOrderByDateDesc(String category);

    List<Expense> findAllByOrderByDateAsc();

    List<Expense> findAllByOrderByDateDesc();
}
