package taskmanager.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import taskmanager.project.models.Expense;

interface ExpenseDAORepository extends JpaRepository<Expense, Long> {
}
