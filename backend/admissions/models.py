from django.db import models

class AdmissionApplication(models.Model):
    # 1. PERSONAL INFORMATION
    student_name = models.CharField(max_length=100)
    student_photo = models.ImageField(upload_to='student_photos/') # Photo ke liye
    date_of_birth = models.DateField()
    resident_of = models.CharField(max_length=100)
    mother_tongue = models.CharField(max_length=50)
    other_languages = models.CharField(max_length=100, blank=True, null=True)
    hobby = models.CharField(max_length=100, blank=True, null=True)

    # 2. PARENT'S INFORMATION (Father)
    father_name = models.CharField(max_length=100)
    father_cnic = models.CharField(max_length=20)
    father_qualification = models.CharField(max_length=100, blank=True, null=True)
    father_occupation = models.CharField(max_length=100)
    father_income = models.CharField(max_length=50, blank=True, null=True)
    father_phone = models.CharField(max_length=20, blank=True, null=True)
    father_cell = models.CharField(max_length=20)
    father_email = models.EmailField(blank=True, null=True)

    # 2. PARENT'S INFORMATION (Mother - Optional)
    mother_name = models.CharField(max_length=100, blank=True, null=True)
    mother_cnic = models.CharField(max_length=20, blank=True, null=True)
    mother_qualification = models.CharField(max_length=100, blank=True, null=True)
    mother_occupation = models.CharField(max_length=100, blank=True, null=True)
    mother_income = models.CharField(max_length=50, blank=True, null=True)
    mother_cell = models.CharField(max_length=20, blank=True, null=True)
    mother_email = models.EmailField(blank=True, null=True)

    # Family Combined Info
    total_monthly_income = models.CharField(max_length=50, blank=True, null=True)
    address = models.TextField()
    postal_address = models.TextField()

    # 3. GUARDIAN'S INFO (Optional)
    guardian_name = models.CharField(max_length=100, blank=True, null=True)
    guardian_cnic = models.CharField(max_length=20, blank=True, null=True)
    guardian_relation = models.CharField(max_length=50, blank=True, null=True)
    guardian_cell = models.CharField(max_length=20, blank=True, null=True)
    guardian_email = models.EmailField(blank=True, null=True)

    # 4. ACADEMIC INFO
    class_applied_for = models.CharField(max_length=50)
    class_last_attended = models.CharField(max_length=50)
    school_last_attended = models.CharField(max_length=200)
    percentage_or_grade = models.CharField(max_length=20)

    # 5. MEDICAL INFO (Boolean field means Yes/No)
    physical_disability = models.BooleanField(default=False)
    mental_disability = models.BooleanField(default=False)
    blood_group = models.CharField(max_length=10, blank=True, null=True)
    vision = models.CharField(max_length=20, blank=True, null=True)

    # 6. FACILITIES
    avail_hostel = models.BooleanField(default=False)
    avail_van = models.BooleanField(default=False)

    # 7. ACHIEVEMENTS
    academic_achievement = models.TextField(blank=True, null=True)
    co_curricular_achievement = models.TextField(blank=True, null=True)

    # 8. UPLOAD REQUIRED DOCUMENTS (FileField allows both PDF and Images)
    form_b_doc = models.FileField(upload_to='admission_docs/form_b/')
    school_leaving_cert = models.FileField(upload_to='admission_docs/leaving_cert/')
    character_cert = models.FileField(upload_to='admission_docs/character_cert/', blank=True, null=True)

    # System Fields (Automatic)
    application_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default="Pending")

    def __str__(self):
        return f"{self.student_name} - {self.class_applied_for}"