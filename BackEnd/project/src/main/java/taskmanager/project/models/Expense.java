package taskmanager.project.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "expense")
@Data
public class Expense {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "date")
    private String date;
    @Column(name = "amount")
    private float amount;
    @Column(name = "category")
    private String category;
}
