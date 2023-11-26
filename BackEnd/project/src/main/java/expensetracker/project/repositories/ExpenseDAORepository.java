package expensetracker.project.repositories;

import expensetracker.project.models.Expense;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface ExpenseDAORepository extends JpaRepository<Expense, Long> {

    Page<Expense> findByCategoryOrderByDateAsc(String category, Pageable pageable);

    Page<Expense> findByCategoryOrderByDateDesc(String category, Pageable pageable);

    Page<Expense> findAllByOrderByDateAsc(Pageable pageable);

    Page<Expense> findAllByOrderByDateDesc(Pageable pageable);

    @Query("SELECT SUM(e.amount) FROM Expense e")
    Float getSumOfAmount();

    @Query("SELECT e.category FROM Expense e GROUP BY e.category ORDER BY SUM(e.amount) DESC LIMIT 1")
    String findCategoryWithHighestSum();

    @Query(value = "SELECT COALESCE(SUM(e.amount), 0) FROM Expense e WHERE MONTH(e.date) = MONTH(CURRENT_DATE) AND YEAR(e.date) = YEAR(CURRENT_DATE)", nativeQuery = true)
    Float getSumOfAmountForCurrentMonth();

    @Query(value = "SELECT SUM(e.amount) FROM Expense e WHERE e.date >= :thirtyDaysAgo", nativeQuery = true)
    Float getSumOfAmountForLastThirtyDays(@Param("thirtyDaysAgo") Date thirtyDaysAgo);

    @Query(value = "SELECT SUM(e.amount) FROM Expense e WHERE e.date <= :thirtyDaysAgo AND e.date >= :sixtyDaysAgo", nativeQuery = true)
    Float getSumOfAmountForLastSixtyDaysToLastThirtyDays(@Param("thirtyDaysAgo") Date thirtyDaysAgo, @Param("sixtyDaysAgo") Date sixtyDaysAgo);

    @Query(value = "SELECT e.category, SUM(e.amount) FROM Expense e GROUP BY e.category", nativeQuery = true)
    List<Object[]> getTotalAmountByCategory();

    @Query(value = "SELECT MONTH(e.date), YEAR(e.date), SUM(e.amount) FROM Expense e GROUP BY MONTH(e.date), YEAR(e.date) ORDER BY YEAR(e.date) DESC, MONTH(e.date) DESC", nativeQuery = true)
    List<Object[]> getSumOfAmountByMonth();

    @Query(value = "SELECT YEAR(e.date), SUM(e.amount) from Expense e GROUP BY YEAR(e.date) ORDER BY YEAR(e.date) DESC", nativeQuery = true)
    List<Object[]> getSumOfAmountByYear();

    @Query(value = "SELECT e.category, e.amount FROM Expense e ORDER BY CONCAT(YEAR(e.date), MONTH(e.date), DAY(e.date)) DESC LIMIT 5", nativeQuery = true)
    List<Object[]> getExpensesSortedByLatestLimitFive();
}
