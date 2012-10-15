domain Modeling {
  
  enum RelationshipKind {
  }
  
  entity Relationship {
    Name as String
  }

  entity Entity {
    Name as String
    Properties as Agregation of Property
    Relationships as Association to Entity
  }

}

domain Parties { 

  entity Person {
    Name as String 
    Born as Date 
    Money as Decimal
  } 
  
  entity Organization {
    Name as String
  }
  
  repository Organizations for Organization {
  }
}

domain Accounting {
  entity Book {
  	Name as String
  }
}

